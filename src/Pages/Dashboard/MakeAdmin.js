import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const {data:users,isLoading,refetch } = useQuery('users',()=>fetch('https://manufacturer-website-server-site-assignment-12.vercel.app/user',{
      
        method :'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      
    }).then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Make Admin{users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
 {
     users.map(user=><AdminRow
     
     key={user._id}
     user={user}
     refetch ={refetch}
     ></AdminRow>)
 }
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;