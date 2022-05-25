import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const Checkout = ({orders}) => {
    console.log(orders);

    const {customerName,customer,price,_id}=orders
    const [cardEroor,setCardError]=useState('')
    const [success,setSuccess]=useState('')
    const [transicationId,settransicationId]=useState('')
    const [clientSecret,setClientsecret]=useState('')
    const [processing,setProcessing]=useState(false)
    useEffect(()=>{
        const url="http://localhost:5000/create-payment-intent"
        fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json",
               authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data?.clientSecret){
             
                setClientsecret(data.clientSecret)
            }
        })
    },[price])
    const stripe=useStripe()
    const elements=useElements()
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
       
        // confirm card payment
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: customerName,
                  email:customer
                },
              },
            },
          );
        if (intentError) {
            setCardError(intentError?.message);
        
        }
        else {
            setCardError('');
           settransicationId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')
        }
      };
      
    return (
        <div>
             <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
       cardEroor && <p className='text-xl text-red-500'>{cardEroor}</p>
      }
      {
       success && <div className='text-xl text-green-500'>
        <p>{success}</p>
        <p className="text-xl text-purple-700">Your TransicationId:{transicationId}</p>
       </div>
      }
        </div>
    );
};

export default Checkout;