import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import {  Elements, } from '@stripe/react-stripe-js';

import { useQuery } from 'react-query';
import Checkout from './Checkout';
import Loading from '../../../SharedPages/Loading';
const stripePromise = loadStripe('pk_test_51L1X09Axl651FBGiX3GTztTGcIxhHgaG82QPnzAcXrPDLuCLckDypW6Rl2H6e02LNKroDzKfmAGqD9yvSm0PDO0p00cBN92ybx');
const Payment = () => {
    const {id}=useParams()

    const url = `https://bicyle-manufacture-server-side.onrender.com/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res => res.json()));
console.log(order)
  if (isLoading) {
      return <Loading></Loading>
  }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
          
                {
                  order?.map(orders=><>
                  <div class="card-body">
                  <h2 class="card-title">
                    hey!!! {orders?.customerName}
                    <div class="badge badge-secondary">Selected</div>
                  </h2>
                  <h6>please Pay for <span className="font-bold">{orders?.productName}</span>..</h6>
                 
                  <Elements stripe={stripePromise}>
    <Checkout orders={orders}></Checkout>
  </Elements>
                </div>
             
                
           
                
                
               </>)
                }
              </div>
             
           
        </div>
    );
};

export default Payment;