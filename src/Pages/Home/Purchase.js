import { UserCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = ({parts,setParts}) => {
    const {_id,name,minimumOrderQuantity,available,price}=parts;
    const [user, loading, error] = useAuthState(auth);
   console.log(user);


   const handleBooking =event =>{
       event.preventDefault();
       const quantity =event.target.quantity.value;
       if(quantity<minimumOrderQuantity || quantity>available){
           toast('please take a number among minimum quantity and avalable quantity');
       }
     else{
        const booking=  {
            toolsId :_id,
            toolsName: name,
            email: user.email,
            personName:user.displayName,
            phone:event.target.phone.value,
            address:event.target.address.value,
            amount:quantity,
            price :price
 
        }
        fetch('https://bicycle-server.vercel.app/booking',{
            method :'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
           
        })
        toast.success('You have booked successfully');
        setParts(null);
       
        
     }
   }


    return (
        <div>
            

<input type="checkbox" id="purchase-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-primary">Tool's Name: {name}</h3>
    <form  onSubmit={handleBooking} className='grid grid-cols-span-1 gap-3 mt-2 justify-items-center'>
    <input type="text"  disabled value={name} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="text"name='email'  disabled value={user?.email || ''} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="text"name='name' disabled value={user?.displayName || ''} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='address' placeholder="address" class="input input-bordered w-full max-w-xs" />
    <input type="number" name='quantity'  placeholder={minimumOrderQuantity} class="input input-bordered w-full max-w-xs" />
    <input type="submit" value='submit' placeholder="Type here" class="btn btn-primary font-bold text-white w-full max-w-xs" />
    </form>
  </div>
</div>
            
        </div>
    );
};

export default Purchase;