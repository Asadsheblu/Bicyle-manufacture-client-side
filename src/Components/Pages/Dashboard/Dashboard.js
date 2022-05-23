import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import  {Link,Outlet} from "react-router-dom";
import auth from '../../../firebase.init';
import useAdmin from '../../../Hook/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin]=useAdmin(user)
  console.log(admin);
  
    return (
       <div>
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-30 bg-accent text-white text-base-content">
    <li><Link to="/dashboard">Myorder</Link></li>
    
     
      {
        admin ?<>
        
        <li><Link to="/dashboard/user">All user</Link></li>
        <li><Link to="/dashboard/profile">My Profile</Link></li>
          <li><Link to="/dashboard/manage">Manage Order</Link></li>
          <li><Link to="/dashboard/addProduct">Add Product</Link></li>
         
        </>
        :
        <>
          <li><Link to="/dashboard/order">Myorder</Link></li>
        <li><Link to="/dashboard/profile">My Profile</Link></li>
          <li><Link to="/dashboard/review">Add A Review</Link></li>
        </>

      }
    
    
     
      
   
   




                 
                                 
                        
    
                        
                        
                   
    </ul>
  
  </div>
</div>
</div>
    );
};

export default Dashboard;