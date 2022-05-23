import React from 'react';
import { useNavigate } from 'react-router-dom';
const Part = ({part}) => {
    const {img,price,name,description,Mquantity,Quantity,_id}=part
    const navigate=useNavigate()
    const handelParts=(_id)=>{
      navigate(`/parts/${_id}`)
    }
    return (
        <div>
           <div class="card card-compact w-96 bg-base-100 shadow-xl text-black">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Product Name:{name}</h2>
    <p>Product Description:{description}</p>
    <h4 class="text-xl">Available quantity:{Quantity}</h4>
    <h4 class="text-xl">Minimum quantity:{Mquantity}</h4>
    <h4 class="text-xl">Product Price:{price}</h4>
    <div class="card-actions justify-center">
      <button onClick={()=>handelParts(_id)} class="btn btn-primary">Product Details</button>
    </div>
  </div>
</div>
  
 
  
</div>
        
    );
};

export default Part;