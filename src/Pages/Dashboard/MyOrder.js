import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders,setOrder]=useState([]);
    const [user]=useAuthState(auth);
    const navigate =useNavigate();
    useEffect(()=>{
      if(user){
        fetch(`https://radiant-temple-88405.herokuapp.com/booking?email=${user.email}` ,{
          method :'GET',
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>{
          console.log('res',res)
          if(res.status === 401 || res.status=== 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/home');
          }
          return res.json()
        })
        .then(data=>{
            setOrder(data)
            
            
        });
      }
    },[user])


    const handleDelete =id=>{
        const procced=window.confirm('Are you sure you want to delete ?');
        if(procced){
            const url =`https://radiant-temple-88405.herokuapp.com/booking?amount=${id}`
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
                <td>
                  
                  {(order.price && !order.paid)&&
                  <Link to={`/dashboard/payment/${order._id}`}><button class="btn font-bold btn-xs">pay</button></Link>}
                  {(order.price && order.paid)&&
                  <div><Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-primary text-white font-bold  btn-xs">paid</button></Link>
                  <p>TransactionId: <br /> <span className='text-orange-500 font-bold'> {order.transaction}</span> </p>
                  </div>

                  }
                  
                  </td>
                <td>
                  {!order.paid &&  <button onClick={()=>handleDelete(order._id)} class="btn disabled font-bold btn-xs">Cancel</button>}
                  </td>
              </tr>)
        }
     
      
      
    </tbody>
  </table>
  
</div>
        </div>
    );
};

export default MyOrder;