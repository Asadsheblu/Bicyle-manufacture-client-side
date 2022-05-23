import React, { useState } from 'react';
import {
    
       Link
  } from "react-router-dom";
  import { signOut } from 'firebase/auth';
  import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {

  const [user]=useAuthState(auth)
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
    return (
        <div>
            <div className="navbar  bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown text-white">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
        <li><Link to="/">Home</Link></li>
       

      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/protfolio">Profolio</Link></li>
     
      
      <li><Link to="/contact">Contact Us</Link></li>
      <li>
        {user &&
        <Link to="/dashboard">Dashboard</Link>}
        </li>

      <li>
      {
        user?<>




        
        <button onClick={logout} className='btn btn-info me-2'>SignOut</button>
        <h6>  {user?.displayName}</h6>
        
        </>


        
       
        :
          <button className='btn btn-info me-2'><Link className='text-decoration-none text-white'to="/login">SingIn</Link></button>
      }
        
       </li>
      </ul>
    </div>
    <Link to="/" className=" normal-case text-warning text-xl">B I C Y C L E <small>M A N I A</small></Link>
  </div>
  <div className='navbar-end'>
  <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

      </label>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/protfolio">Protfolio</Link></li>
     
      <li><Link to="/contact">Contact Us</Link></li>
      <li>
        {user &&
        <Link to="/dashboard">Dashboard</Link>}
        </li>
      <li>
      {
        user?<>




        
        <button onClick={logout} className='btn btn-info me-2'>SignOut</button>
        
        <h6> {user?.displayName}</h6>
        
        </>


        
       
        :
          <button className='btn btn-info me-2'><Link className='text-decoration-none text-white'to="/login">SingIn</Link></button>
      }
        
       </li>
       
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/signUp" className="btn">SignUp</Link>
  </div>
  
</div>
        </div>
    );
};

export default Header;