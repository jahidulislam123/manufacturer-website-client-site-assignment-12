import React from 'react';

const AdminRow = ({user}) => {
    const {email} =user;
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td><button class="btn btn-xs">Make Admin</button></td>
        <td><button class="btn btn-xs">Reomove User</button></td>
      </tr>
    );
};

export default AdminRow;