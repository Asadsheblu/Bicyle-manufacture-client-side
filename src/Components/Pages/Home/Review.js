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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-10'>
            {
                reviews.map(review=><div>
                    <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    
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