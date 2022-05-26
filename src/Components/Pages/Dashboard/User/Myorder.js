import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init"
import {Link} from "react-router-dom";
const Myorder = () => {
    const [orders,setOrder]=useState([])
    const [order]=useAuthState(auth)
    const email=order?.email
    useEffect(()=>{
        fetch(`https://fathomless-stream-52257.herokuapp.com/order?customer=${email}`,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    
    const handelDeleted=(id)=>{
            fetch(`https://fathomless-stream-52257.herokuapp.com/order/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount<0){
                    window.location.reload()
                    alert("this product deleted sucessfuly")
                }
            })

    }
    return (
        <div class="overflow-x-auto">
     <table class="table table-compact w-full">
    
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Orders Quantity</th>
            <th>Total Price</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          orders?.map((order,index)=><>
          <tr>
        <th>{index+1}</th>
        <td>{order?.customerName}</td>
        <td>{order?.customer}</td>
        <td>{order?.productName}</td>
        <td>{order?.orders}</td>
        <td>{order?.price}</td>
        <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success" >Payment</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <span className="text-success" >Processing...</span>
                                        <p><span className='text-success'> {order.transictionId}</span></p>
                                    </div>}
                                </td>
        <td>
       {
        (order.price && !order.paid) ?
        <button for="my-modal-3"  class="btn modal-button">Cancel</button>
        :
        <button for="my-modal-3" disabled class="btn modal-button">Cancel</button>

       }
         </td>
      
    

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    
    <h3 class="text-lg font-bold">Hey!! {order?.customerName} Are You Sure Want to Cancel This Order?</h3>
   
    <label for="my-modal-3" class="btn btn-xs btn-warning absolute left-2 bottom-2">No</label>
    <div class="modal-action">
    <button  onClick={()=>handelDeleted(order?._id)} class="btn btn-xs btn-error">Yes</button>
    </div>
  </div>
       </div>
      </tr>
          </>
       
          )
         }
          
          
          
        </tbody>
      </table>
    </div>
    );
};

export default Myorder;