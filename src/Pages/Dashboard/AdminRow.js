import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({user,refetch}) => {
  // const [alltools,setAllTools]=useState([]);
  // console.log(alltools);
  // if(user){
  //   setAllTools(user);

  // }
  
  const {email,role}=user;
  const makeAdmin =()=>{
    fetch(`https://radiant-temple-88405.herokuapp.com/user/admin/${email}`,{
      method :'PUT',
      headers:{
        authorization :`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>{
      if(res.status === 403){
        toast.error('Failed to make an admin');
      }
     return res.json()
    })
    .then(data=>{
      if(data.modifiedCount>0){
        refetch()
      toast.success('Make admin successfully');
      }
    })
  }




//https://radiant-temple-88405.herokuapp.com/
const handleDelete=(id)=>{
  const procced=window.confirm('Are you sure you want to delete ?');
  if(procced){
      const url =`https://radiant-temple-88405.herokuapp.com/user?amount=${id}`
      fetch(url,{
          method : 'DELETE',
          'content-type':'application/json'

      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          // const remaining =alltools.filter(items =>items._id!==id);
          // setAllTools(remaining);
          toast.success(` deleted successfully`)
          
      })
  }
  
}

    
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
          { role !== 'admin' &&
            <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>
          }
        </td>
        <td><button onClick={()=>handleDelete(user._id)} class="btn btn-xs">Reomove User</button></td>
      </tr>
    );
};

export default AdminRow;