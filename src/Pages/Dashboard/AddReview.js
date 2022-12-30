import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user]=useAuthState(auth)
    console.log(user);
    const handlesubmit =(event)=>{
        event.preventDefault();
        const one =event.target.ami.value;
        const two =event.target.textall.value;
        if(one<0 ||one>5 ){
            toast('please give rating 1-5');
        }
        else{

            const booking2 ={
                img: user.photoURL,
                name:user.displayName,
                rating :one,
                text : two

            }
            fetch('https://bicycle-server.vercel.app/review',{
                method :'POST',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(booking2)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.success('you have submitted this ratings .go to home page to see this')
               
            })

        }
        
       
       

    }
    return (
        <div className='text-black'>
            <h3 className='text-3xl    font-bold text-black'>Please Add a Review !!</h3>
            <form className='flex m-12 rounded-box  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-col p-24  justify-center items-center' onSubmit={handlesubmit}>
            <input type="number" name='ami' placeholder="Please give rating among 1-5" class="input input-bordered input-primary my-2 w-full max-w-xs" />
            <input type="text" name='textall' placeholder="write something about our services" class="input my-2 input-bordered input-primary w-full max-w-xs" />
            
            <input type="submit" value='Post'  class="btn btn-black text-white my-2 font-bold w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;