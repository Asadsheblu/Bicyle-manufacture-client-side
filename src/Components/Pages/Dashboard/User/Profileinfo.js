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
        fetch(`http://localhost:5000/userinfo`,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>setinfo(data))
    }
    },[user])
    return (
        <div>
            {
                myInfo.map(info=><div>
                    <h6>{info?._id}</h6>
                </div>)
            }
        </div>
    );
};

export default Profileinfo;