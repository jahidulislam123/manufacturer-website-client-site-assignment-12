import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddedReview = () => {
    const [review,setReview]=useState([]);
    const [user]=useAuthState(auth);
    useEffect(()=>{
        fetch('https://bicycle-server.vercel.app/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl sm:mx-5 font-bold text-cyan-600'>You are able to see whatevet customer say about our services</h2>
            <h3>Amount of review {review.length}</h3>
            <div className='grid sm:grid-cols-1 mx-7 lg:grid-cols-3 gap-4'>
                {
                    review.map(a=>
                        <div class="card  bg-base-100 shadow-xl">
                        
                        <figure>
                          <div  class="w-24  mask mask-squircle">
                          <img src={a.img}alt="Shoes" />
                          </div></figure>
                          
                          
                        <div class="card-body">
                          <h2 class="card-title">
                            Ratings
                            <div class="badge badge-secondary">{a.rating}</div>
                          </h2>
                          <p className='text-left'>{a.text}</p>
                          <div class="card-actions justify-end">
                            <div class="badge badge-outline">{a.name}</div> 
                          </div>
                        </div>
                      </div>
                        )
                }
            </div>
        </div>
    );
};

export default AddedReview;