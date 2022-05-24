import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders,setOrder]=useState([]);
    const [user]=useAuthState(auth);
    useEffect(()=>{
      if(user){
        fetch(`http://localhost:5000/booking?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
            
            
        })
      }
    },[user])


    const handleDelete =id=>{
        const procced=window.confirm('Are you sure you want to delete ?');
        if(procced){
            const url =`http://localhost:5000/booking?amount=${id}`
            fetch(url,{
                method : 'DELETE',
                'content-type':'application/json'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining =orders.filter(items =>items._id!==id);
                setOrder(remaining);
                toast.success(` deleted successfully`)
                
            })
        }
        
    }
    return (
        <div>
            <h3>Amount of  My order {orders.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Parts</th>
        <th>Amount</th>
        <th>Phone</th>
        <th>Pay</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((order,index)=><tr>
                <th>{index+1}</th>
                <td>{order.personName}</td>
                <td>{order.address}</td>
                <td>{order.toolsName}</td>
                <td>{order.amount}</td>
                <td>{order.phone}</td>
                <td><button class="btn btn-xs">Pay</button></td>
                <td><button onClick={()=>handleDelete(order._id)} class="btn btn-xs">Cancel</button></td>
              </tr>)
        }
     
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;