import React from 'react';

const ManageOrderDelete = ({order,index}) => {
    return (
        <div>
            
            <tr>
        <th>{index+1}</th>
        <td>{order.toolsName}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
            
        </div>
    );
};

export default ManageOrderDelete;