import React from 'react';
import {toast } from 'react-toastify';

const Userrow = ({user,index}) => {
    console.log(user);
    const {email,role}=user
    const makeAdmin=()=>{
        fetch(`https://bicyle-manufacture-server-side.onrender.com/user/admin/${email}`,{
            method:"PUT",
            headers:{
                authorization:`bearer ${localStorage.getItem("accessToken")}`
              }
        })
        .then(res=>{
            if(res.status===403){
               toast.error("You Are not eligable for add admin")
            }
           return res.json()
        })
        .then(data=>{
            if(data.modifycount>0){
                window.location.reload()
                toast.success(`Congratrulation!!${email} Now Your Are Admin`)
            }
            
    })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user?.email}</td>
        {role!=="admin" ? <td><button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make An Admin</button></td>
        :
        <td><button disabled className='btn btn-xs btn-primary'> Admin</button></td>
        
        }
        <td><button className='btn btn-xs btn-red-500'>Remove</button></td>
      </tr>
    );
};

export default Userrow;