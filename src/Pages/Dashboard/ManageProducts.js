import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {
    
    const [alltools,setAllTools]=useState([]);
    useEffect(()=>{
        fetch('https://radiant-temple-88405.herokuapp.com/tools')
        .then(res=>res.json())
        .then(data=>setAllTools(data));
    },[])


    const handleDelete=(id)=>{
        const procced=window.confirm('Are you sure you want to delete ?');
        if(procced){
            const url =`https://radiant-temple-88405.herokuapp.com/deleted?amount=${id}`
            fetch(url,{
                method : 'DELETE',
                'content-type':'application/json'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining =alltools.filter(items =>items._id!==id);
                setAllTools(remaining);
                toast.success(` deleted successfully`)
                
            })
        }
        
    }


    return (
        <div>
            <h2>delete products{alltools.length}</h2>

            <div class="overflow-x-auto">
            <table class="table w-full">
   
  <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Price</th>
       
        <th>Amount</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
     
     {
         alltools.map((order,index) =><tr>
         <th>{index+1}</th>
         <td><div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={order.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
         <td>{order.name}</td>
         <td>${order.price}</td>
         <td>{order.available}</td>
         
         
         
         <td><button onClick={()=>handleDelete(order._id)} class="btn btn-xs">Cancel</button></td>
       </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProducts;