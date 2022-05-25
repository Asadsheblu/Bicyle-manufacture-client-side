import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [allOrder,setAllorder]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/manageOrder',{
          headers:{
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
          setLoading(true)
          setAllorder(data)})
    },[])
    return (
        
             <div class="overflow-x-auto">
      <table class="table w-full">
    
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Orders Quantity</th>
            <th>Total Price</th>
            <th>Payment</th>
            <th>Action</th>
            
            
          </tr>
        </thead>
        <tbody>
         {
          allOrder?.map((order,index)=><>
          <tr>
        <th>{index+1}</th>
        <td>{order?.customerName}</td>
        <td>{order?.customer}</td>
        <td>{order?.orders}</td>
        <td>{order?.price}</td>
        
        <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success" >Unpaid</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <span className="text-success" >Pending...</span>
                                        <p><span className='text-success'> {order.transictionId}</span></p>
                                    </div>}
                                </td>
         </tr>
         </>
       
          )
         }
          
          
          
        </tbody>
      </table>
    </div>
    );
};

export default ManageOrder;