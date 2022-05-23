import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/review",{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            {
                reviews.map(review=><div>
                    <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">{review?.review}</h2>
    <p>" {review?.feedback} "</p>
   
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default Review;