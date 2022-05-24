import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
const Purchase = () => {
    const {id}=useParams()
    const [parts,setParts]=useState({})
   const [disable, setDisable] = useState(false);
   const [newQuantity,setNewQuantity]=useState(0)
    const [user]=useAuthState(auth)
    
    useState(()=>{
        fetch(`http://localhost:5000/parts/${id}`)
        .then(res=>res.json())
        .then(data=>setParts(data))

       
    },[])
  
    const handleChange = event => {
      const disable = event.target.value;

      setDisable(disable);
  }
  const handeldelivered=async()=>{
    const updatedQuantity = +newQuantity - 1;
   
    setNewQuantity(updatedQuantity)

    const url = `http://localhost:5000/parts/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ updatedQuantity })
    })
        .then(res => res.json())
        .then(data => {
            
console.log('success', data);
            alert('Delivered successfully!!!');
        })
    
  }
     
    const handelAdditional=(e)=>{
      e.preventDefault()
      const address=e.target.address.value 
      const number=e.target.number.value 
      const orders=e.target.orders.value
    
      const data={address,number,orders}
      console.log(data);
     const orderData={
      orderId:parts._id,
      orders,
      customerName:user?.displayName,
      
      customer:user.email,
      price:parts.price*orders,
    address,
    number

     }
     fetch('http://localhost:5000/order',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(orderData)
        })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    alert(`Your order for ${parts?.name} is placed`)
                })
                
    }
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10'>
        <div class="flex h-screen justify-center items-center">
            <div class="card card-compact w-96 bg-base-100 shadow-xl text-black">
  <figure><img src={parts?.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Product Name:{parts?.name}</h2>
    <p>parts? Description:{parts?.description}</p>
    <h4 class="text-xl">Product Price:{parts?.Quantity}</h4>
   
  
    <h4 class="text-xl"> Minimam Quantity:{parts?.Mquantity}</h4>
    
  </div>
</div>
           </div> 
           <div>
            <div className='mt-5 shadow-lg '>
                <h3 className='text-center'> parts? Detail of {parts?.name}</h3>
            </div>
            <form onSubmit={handelAdditional} className='w-50   text-center'>
            <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                <input type="text" class="input input-bordered input-primary w-full max-w-xs " value={user.displayName} disabled />
                </div>
                <br />
            <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                <input type="text" class="input input-bordered input-primary w-full max-w-xs " value={user.email} disabled />
                </div>
                <br />
                <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Material name</span>
                    </label>
                <input type="text"  placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs " value={parts?.name} disabled />
                </div>
                <br />
                <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Price per Material</span>
                    </label>
                <input type="text" name='price' placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs " value={parts?.price} disabled />
                </div>
                <br />
                <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Quantities Left</span>
                    </label>
                <input type="text" name='quantity' placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs " value={parts?.Quantity} disabled />
                </div>
                <br />
                <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Phone number</span>
                    </label>
                <input type="text" name='number' placeholder="Phone number" class="input input-bordered input-primary w-full max-w-xs " />
            </div>
                <br />
                <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Your address</span>
                    </label>
                <input type="text" name='address' placeholder="Address" class="input input-bordered input-primary w-full max-w-xs " />
            </div>
                <br />
                <div class="form-control flex items-center">
                    <label class="label">
                        <span class="label-text">Your Order</span>
                    </label>
                <input type="number" name='orders' onChange={handleChange} placeholder={`Minimum Order ${parts?.Mquantity}`} class="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <br />

                    <input className='btn btn-info my-4 fw-bold shadow' type="submit"
                        disabled={disable < 100 || disable >= parts?.total_quantity}
                        value="Purchase" />

            </form>


        </div>       
                </div>
       
    );
};

export default Purchase;