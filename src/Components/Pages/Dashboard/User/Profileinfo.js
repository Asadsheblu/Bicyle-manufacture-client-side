import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import linkdin  from "../../../../assets/img/icons8-linkedin-circled-48.png"
import { Link } from 'react-router-dom';
const Profileinfo = ({isRealod}) => {
    const [myInfo,setMyinfo]=useState([])
   console.log(isRealod)
   const [user]=useAuthState(auth)
    useEffect(()=>{
        const email=user?.email
      console.log(email)
     
        fetch(`https://fathomless-stream-52257.herokuapp.com/userinfo?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
           
            setMyinfo(data)
        })
    
    },[user,isRealod])
    return (
        <div>
             <div class="card w-96 bg-base-100 shadow-xl">
            <h1 className='text-2xl text-primary'>WellCome {user?.displayName}!!</h1>
          
  <div class="card-body items-center text-center">
  <div class="avatar items-center justify-items-center text-center">
  <div class="w-24 rounded-full items-center text-center m-10 justify-items-center  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={myInfo?.info?.image} />
  </div>
  </div>
    <h2 class="card-title">Name:{user?.displayName}</h2>
    <p>Email:{user?.email}</p>
 
    
          <h6>Educational Qualification:<span className='text-xl text-primary'>{myInfo?.info?.education}</span></h6>
          <h6>Your Country:<span className='text-xl text-primary'>{myInfo?.info?.location}</span></h6>
          <h6>Your Contact No:<span className='text-xl text-primary'>{myInfo?.info?.number}</span></h6>
               <span className='ps-10 justify-items-center'><a href={`${myInfo?.info?.linkdin}`}><img src={linkdin} alt="" /></a></span>
               </div>
    </div>
        </div>
    );
};

export default Profileinfo;