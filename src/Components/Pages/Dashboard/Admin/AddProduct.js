
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from "../../../SharedPages/Loading"
import { ToastContainer, toast } from 'react-toastify';
const AddProduct = () => {

  const [user,loading]=useAuthState(auth)
    const imageKey="8883b33790ee9795a35b86084c95369f"
    const addProduct=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const description=e.target.description.value 
        const price=e.target.price.value 
        const quantiity=e.target.quantiity.value 
        const mQuantity=e.target.mQuantity.value 
        const image=e.target.image.files[0]
        const products={name,description,price,quantiity,mQuantity,image}
        console.log(products);
        const formData=new FormData()
        formData.append('image',image)
        const url=`https://api.imgbb.com/1/upload?key=${imageKey}`
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                const img=data.data.url
                const products={
                    name:name,
                    description:description,
                    price:parseInt(price),
                    Quantity:parseInt(quantiity),
                    Mquantity:parseInt (mQuantity),
                    img:img

                }
                fetch('https://fathomless-stream-52257.herokuapp.com/parts',{
                    method:"POST",
                    headers:{
                        "content-type":"application/json",
                        authorization:`bearer ${localStorage.getItem("accessToken")}`
                    },
                    body:JSON.stringify(products)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        window.location.reload()
                        toast.success("products added")
                    }
                    console.log(data);
                })
            }
            console.log(data);
        })
        if(loading){
            return <Loading></Loading>
        }

    }
    return (
        <div>
            <div className='p-14 w-75 shadow-2xl mx-auto'>
            <form onSubmit={addProduct} className="mx-auto">
                
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name="description" className='border' id="" cols="30" rows="5"></textarea>
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="price here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name='quantiity' placeholder="Quantity here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input type="text" name='mQuantity' placeholder="Minimum Quantity here" class="input input-bordered w-full max-w-xs" />

          <input type="file" name='image' class="input input-bordered w-full max-w-xs" />
          
          <br />
          <input type="submit" className='btn btn-success mt-3' value="Add Product" />
          
            
          
            </form>
            </div>
        </div>
    );
};

export default AddProduct;