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
     
        fetch(`http://localhost:5000/userinfo?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
           
            setMyinfo(data)
        })
    
    },[user,isRealod])
    return (
        <div>
          <h6>Educational Qualification:<span className='text-xl text-primary'>{myInfo?.info?.education}</span></h6>
          <h6>Your Country:<span className='text-xl text-primary'>{myInfo?.info?.location}</span></h6>
          <h6>Your Contact No:<span className='text-xl text-primary'>{myInfo?.info?.number}</span></h6>
               <span className='ps-10 justify-items-center'><a href={`${myInfo?.info?.linkdin}`}><img src={linkdin} alt="" /></a></span>
        </div>
    );
};

export default Profileinfo;