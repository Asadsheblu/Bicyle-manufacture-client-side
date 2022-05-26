import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

import Userrow from './Userrow';



const Alluser= () => {
    const [users,setUsers]=useState([])
   
    const {user}=useAuthState(auth)
    const email=user?.email
    useEffect(()=>{
      fetch(`https://fathomless-stream-52257.herokuapp.com/user/`,{
          method:"GET",
          headers:{
            authorization:`bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUsers(data)
        })
        
    },[])
    
   
    
    return (
      <div class="overflow-x-auto">
      <table class="table w-full">
    
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Access</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          users?.map((user,index)=><Userrow key={user?._id} user={user}index={index}></Userrow>
       
          )
         }
          
          
          
        </tbody>
      </table>
    </div>
    );
};

export default Alluser;