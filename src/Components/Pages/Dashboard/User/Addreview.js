import React, { useState } from 'react';
import ReactStars from 'react-stars'
const Addreview = () => {
  const [review,setReview]=useState(0)
  const addReview=(e)=>{
    e.preventDefault()
    const feedback=e.target.review.value 
    const image=e.target.image.files[0]
    const data={feedback,review,image}
    console.log(data);
    fetch(`http://localhost:5000/review`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        window.location.reload()
        alert("Your review add")
      }
    })
  }
    return (
        <div className='flex h-screen justify-center items-center'>
           
       <form onSubmit={addReview}>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea name="review" className='border' id="" cols="30" rows="5"></textarea>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Upload Image</span>
          </label>
        <input type="file" name="image" id="" />
        </div>
        <ReactStars
      count={5}
      onChange={setReview}
      size={24}
      color2={'#ffd700'} />
       
        <div class="form-control mt-6">
          <button class="btn btn-primary">Add Review</button>
        </div>
        
     
      
        </div>
        </div>
        </form>
        </div>
        
    );
};

export default Addreview;