import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo-1 - Copy.jpg'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout =()=>{
    signOut(auth);
  }
    const menuItem = <>
        <li><Link to='/'></Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link to='/reveiw'>Review</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>{ user? <button onClick={logout} class="btn btn-ghost">SignOut</button> :<Link to='/login'>Login</Link>}</li>
       
    
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        {/* <img src={logo} alt="" /> */}
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItem}
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <img className='w-20 ml-7' src={logo} alt="" />
    <h2 className='font-bold text-3xl ml-3 text-primary'>MNFT</h2>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-7 font-bold text-white btn-primary">Get started</a>
  </div>
</div>
    );
};

export default Navbar;