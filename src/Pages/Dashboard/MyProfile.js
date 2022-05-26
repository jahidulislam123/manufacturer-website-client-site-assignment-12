import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    
    return (
        <div className='flex justify-center items-center'>
           
            <div class="card w-96 bg-base-100 shadow-xl">
            <h2 className='text-orange-700 my-2 font-bold text-2xl'>My profile </h2>
  <figure><img class="mask mask-circle" src={user.photoURL} /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Name :
      <div class="badge badge-secondary">{user.displayName}</div>
    </h2>
    <h2 class="card-title">
      Email :
      <div class="badge  text-white badge-primary">{user.email}</div>
    </h2>
    
    {/* <div class="card-actions justify-end">
      <div class="badge  badge-outline">do</div> 
      <div class="badge badge-outline">Products</div>
    </div> */}
  </div>
</div>
            
        </div>
    );
};

export default MyProfile;