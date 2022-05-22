import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo-1 - Copy.jpg'

const Navbar = () => {
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link to='/reveiw'>Review</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
       
    
    </>
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        {/* <img src={logo} alt="" /> */}
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItem}
      </ul>
    </div>
    {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <img className='w-20 ml-7' src={logo} alt="" />
    <h2 className='font-bold text-3xl ml-3 text-primary'>MNFT</h2>

  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn mr-7 btn-primary">Get started</a>
  </div>
</div>
    );
};

export default Navbar;