import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Profileinfo = () => {
    const [myInfo,setinfo]=useState([])
   const [user]=useAuthState(auth)
    useEffect(()=>{
        const email=user?.email
      
        if(user){
        fetch(`http://localhost:5000/userinfo?email=${email}`)
        .then(res=>res.json())
        .then(data=>setinfo(data[0]))
    }
    },[user])
    return (
        <div>
          <h6>Educational Qualification:<span className='text-xl text-primary'>{myInfo?.info?.education}</span></h6>
          <h6>Your Country:<span className='text-xl text-primary'>{myInfo?.info?.location}</span></h6>
          <h6>Your Contact No:<span className='text-xl text-primary'>{myInfo?.info?.number}</span></h6>
        </div>
    );
};

export default Profileinfo;