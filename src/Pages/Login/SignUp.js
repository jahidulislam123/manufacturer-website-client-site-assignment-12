import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate =useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


      let signInErrorMessage ;
      if(loading||gLoading ||updating){
         return <Loading></Loading>
      }
      if(error||gError ||updateError){
        signInErrorMessage = <p className='text-red-500'><small>{error?.message||gUser?.message ||updateError?.message}</small></p>

      }

const onSubmit = async(data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email,data.password);
    await updateProfile({ displayName:data.name });
    console.log('update done');
    navigate('/');
}


    if(user||gUser){
        console.log(user||gUser);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input
   type="text"
   placeholder="Your Name" 
   class="input input-bordered w-full max-w-xs"
   {...register("name", {
       required :{
        value:true,
        message:"name is required"
       }
  })}
    />
  <label class="label">
    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
    
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input
   type="email"
   placeholder="Your Email" 
   class="input input-bordered w-full max-w-xs"
   {...register("email", {
       required :{
        value:true,
        message:"Email is required"
       },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Provide a valid Email' 
    }
  })}
    />
  <label class="label">
    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
  </label>
  <input
   type="password"
   placeholder="Password" 
   class="input input-bordered w-full max-w-xs"
   {...register("password", {
       required :{
        value:true,
        message:"Password is required"
       },
    minLength: {
      value: 6,
      message: 'Must be 6 character or or longer' 
    }
  })}
    />
  <label class="label">
    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    
  </label>
</div>


      {signInErrorMessage}
      <input className='btn w-full text-white max-w-xs btn-active btn-accent font-bold' value='Sign Up' type="submit" />
    </form>

    <p><small>Already have an account? <Link className='text-blue-800 font-bold' to="/signup">Please Login</Link></small></p>
    <div className="divider">OR</div>
    <button onClick={()=>signInWithGoogle()}
     className="btn btn-outline btn-accent"
     >Continue with google</button>
    
  </div>
</div>
        </div>
    );
};

export default SignUp;