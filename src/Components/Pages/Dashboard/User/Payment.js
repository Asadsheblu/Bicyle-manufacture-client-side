import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../SharedPages/Loading';
import Checkout from './Checkout';


const stripePromise = loadStripe('pk_test_51L1X09Axl651FBGiX3GTztTGcIxhHgaG82QPnzAcXrPDLuCLckDypW6Rl2H6e02LNKroDzKfmAGqD9yvSm0PDO0p00cBN92ybx');
const Payment = () => {
    const { id } = useParams();
    const url = `https://fathomless-stream-52257.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body bg-green-100">
                    <p className='font-bold text-primary font-mono'>Hello {order.customerName}</p>
                    <h2 class="text-xl text-secondary">Pay for {order.product}</h2>
                    <p>We will deliver the materials to you within 7 days at {order.address} </p>
                    <p className='text-success font-bold'>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <Checkout order={order} />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;