import React,{useState} from 'react';
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    Link,
  } from "react-router-dom";
  import google from "../../../assets/img/google-g-2015-logo-svgrepo-com.svg"

import auth from "../../../firebase.init"
import Loading from '../../SharedPages/Loading';

const SignIn = () => {
    const [email,setEmail]=useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );



  const [signInWithGoogle,guser] = useSignInWithGoogle(auth);
  if(error){
   toast(error.message)
  }
 
  let navigate = useNavigate();
  let location = useLocation();
 
  if(loading){
    return <Loading />
 }
  let from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from, { replace: true });
  }
    const handelSignIn=async(e)=>{
        e.preventDefault()
      
        const email=e.target.email.value 
        const pass=e.target.password.value 
       
        
       await signInWithEmailAndPassword(email,pass)
       
       
    }
   
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
           
        <form onSubmit={handelSignIn}>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="Email here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password here" class="input input-bordered w-full max-w-xs" />
          <label class="label">
            <p href="#" class="label-text-alt link link-hover">Forgot password?<input  onClick={async (e) => {
          await sendPasswordResetEmail(email);
          toast.success('Sent email');
        }} type="button" className='text-red-500 text-xl' /></p>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
        <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google  <img className='w-10' src={google} alt="" /></button>
                </div>
      </div>
     
      </form>
        </div>
        </div>
    );
};

export default SignIn;