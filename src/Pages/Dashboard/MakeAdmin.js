import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const {data:users,isLoading } = useQuery('users',()=>fetch('https://radiant-temple-88405.herokuapp.com/user').then(res=>res.json()))

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
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
 {
     users.map(user=><AdminRow
     
     key={user._id}
     user={user}
     ></AdminRow>)
 }
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;