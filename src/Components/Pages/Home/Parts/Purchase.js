import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
const Purchase = () => {
    const {id}=useParams()
    const [parts,setParts]=useState([])
    const [user]=useAuthState(auth)
    const [newQuantity,setNewQuantity]=useState(0)
    useState(()=>{
        fetch(`http://localhost:5000/parts/${id}`)
        .then(res=>res.json())
        .then(data=>setParts(data))

       
    },[])
    const handelAdditional=(e)=>{
      e.preventDefault()
      const address=e.target.address.value 
      const number=e.target.number.value 
      const email=user?.email
      const name=user?.displayName
      const data={address,number,email,name}
      console.log(data);
    }
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10'>
        <div class="flex h-screen justify-center items-center">
            <div class="card card-compact w-96 bg-base-100 shadow-xl text-black">
  <figure><img src={parts?.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Product Name:{parts?.name}</h2>
    <p>Product Description:{parts?.description}</p>
    <h4 class="text-xl">Product Price:{parts?.Quantity}</h4>
    <h4 class="text-xl">Product Price:{parts?.Mquantity}</h4>
    
    <div class="card-actions justify-center">
      <button  class="btn btn-primary">Place Order</button>
    </div>
  </div>
</div>
           </div> 
           <div className='p-14 w-75 shadow-2xl mx-auto'>
            <h1 className='text-center text-2xl'>Additional Info</h1>
            <form onSubmit={handelAdditional}  className="mx-auto">
                
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" value={user?.displayName}  class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" value={user?.email}class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">address</span>
          </label>
          <input type="text" name='address' placeholder="address here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">phone number</span>
          </label>
          <input type="text" name='number' placeholder="phone number here" class="input input-bordered w-full max-w-xs" />
          
         

          
          <br />
          <input type="submit" className='btn btn-success mt-3' value="Add Doctor" />
          
            
          
            </form>
            </div>        
                </div>
       
    );
};

export default Purchase;