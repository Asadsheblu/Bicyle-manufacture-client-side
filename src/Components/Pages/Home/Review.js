import React, { useEffect, useState } from 'react';
import start from "../../../assets/img/icons8-star-48.png"
const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/review",{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 p-10'>
            {
                reviews?.slice(0,4).map(review=><div>
                    <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
  <div class="avatar items-center justify-items-center text-center">
  <div class="w-24 rounded-full items-center text-center m-10 justify-items-center  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review?.img} />
  </div>
  </div>
    <p class="text-center text-xl">" {review?.feedback} "</p>
    <h2 class="card-title">{[...Array(parseInt(review?.review)).keys()].map(icon=><div><img width={24} src={start} alt="" /></div>)}</h2>
   
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default Review;