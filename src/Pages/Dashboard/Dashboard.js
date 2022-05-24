import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
   
   <h2 className='text-3xl font-bold text-primary'>Welcome to Your DashBoard</h2>
   <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="dashboardSidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
     
      <li><Link to='/dashboard'>My Order</Link></li>
      <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
      <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;