import React, { useEffect, useState } from 'react';
import start from "../../../assets/img/icons8-star-48.png"
const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("https://bicyle-manufacture-server-side.onrender.com/review",{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-bold text-2xl text-secondary my-2">Our  Client says</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-5'>
            {
                reviews?.slice(0,3).map(review=><div>
                    <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
  <div class="avatar items-center justify-items-center text-center">
  <div class="w-24 rounded-full items-center text-center m-10 justify-items-center  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review?.img} />
  </div>
  </div>
    <p class="text-center text-xl">" {review?.feedback} "</p>
    {/* <h2 class="card-title">{[...Array(parseInt(review?.review)).keys()].map(icon=><div><img width={24} src={start} alt="" /></div>)}</h2> */}
   
  </div>
</div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Review;