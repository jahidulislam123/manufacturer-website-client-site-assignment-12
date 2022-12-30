import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1kgHIutvL6hPmOX0xnV52Ucuwu0MgvnDhskGveHE6Up07pemE83Un3IiNTvCekqJAztZM48EgdkXcEEL2fmOnL00vBMavNwN');


const Payment = () => {
    const {id}=useParams()
    const url = `https://bicycle-server.vercel.app/booking/${id}`
    const {data:order ,isLoading}=useQuery(['booking',id],()=>fetch(url,{
        method :'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

   
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='text-left'>
           
  <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div class="card-body">
    <h2 class="card-title">Pay for {order.toolsName} </h2>
    <p><span className=' font-bold text-primary'>{order.personName}</span>.you want to purchase <span className='text-purple-500 font-bold'>{order.amount}</span> piece <span className='text-orange-700 font-bold'>{order.toolsName}</span></p>
    <p>Please pay :${order.price} for each</p>
  </div>
</div>
    <div class="card w-50 flex-shrink-0  max-w-md shadow-2xl bg-base-100">
      <div class="card-body">
        
      <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
        
     
  </div>
</div>
        </div>
    );
};

export default Payment;