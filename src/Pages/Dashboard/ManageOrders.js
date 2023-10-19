import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageOrderDelete from './ManageOrderDelete';

const ManageOrders = () => {
    const [allorders,setAllorders]=useState([]);
    useEffect(()=>{
        fetch('https://manufacturer-website-server-site-assignment-12.vercel.app/bookingss')
        .then(res=>res.json())
        .then(data=>setAllorders(data));
    },[])


    const handleDelete=(id)=>{
        const procced=window.confirm('Are you sure you want to delete ?');
        if(procced){
            const url =`https://manufacturer-website-server-site-assignment-12.vercel.app/booking?amount=${id}`
            fetch(url,{
                method : 'DELETE',
                'content-type':'application/json'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining =allorders.filter(items =>items._id!==id);
                setAllorders(remaining);
                toast.success(` deleted successfully`)
                
            })
        }
        
    }
    return (
        <div>
            <h2>Show all orders and delete {allorders.length}</h2>
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
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
     
     {
         allorders.map((order,index) =><tr>
         <th>{index+1}</th>
         <td>{order.toolsName}</td>
         <td>{order.address}</td>
         <td>{order.toolsName}</td>
         <td>{order.amount}</td>
         <td>{order.phone}</td>
         
         <td><button onClick={()=>handleDelete(order._id)} class="btn btn-xs">Cancel</button></td>
       </tr>)
     }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageOrders;