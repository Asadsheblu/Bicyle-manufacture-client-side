import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fathomless-stream-52257.herokuapp.com/parts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handelDeleted=(id)=>{
        fetch(`https://fathomless-stream-52257.herokuapp.com/parts/${id}`,{
            method:"DELETE",
            headers:{
              authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
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
        <table class="table w-full">
      
          <thead>
            <tr>
              <th></th>
              <td>Product Img</td>
              <th>Name</th>
              <th>Price</th>
              <th>products Quantity</th>
              <th>Action</th>
              
              
            </tr>
          </thead>
          <tbody>
           {
            products?.map((product,index)=><>
            <tr>
          <th>{index+1}</th>
          <td><div class="mask mask-squircle w-12 h-12">
                <img src={product?.img} alt="Avatar Tailwind CSS Component" />
              </div></td>
          <td>{product?.name}</td>
          <td>{product?.price}</td>
          <td>{product?.Quantity}</td>
          <td>
        <label for="my-modal-3" class="btn modal-button">Delete</label>
         </td>
      
    

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    
    <h3 class="text-lg font-bold">Hey!! Admin Are You Sure Want to Deleted This product {product?.name}?</h3>
   
    <label for="my-modal-3" class="btn btn-xs btn-warning absolute left-2 bottom-2">No</label>
    <div class="modal-action">
    <button  onClick={()=>handelDeleted(product?._id)} class="btn btn-xs btn-error">Yes</button>
    </div>
  </div>
       </div>

          
          
          <td>
          
           </td>
           </tr>
           </>
            )}
              
          
          
          
        </tbody>
      </table>
    </div>
    );
};

export default ManageProduct;