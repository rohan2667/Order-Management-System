import React, { useState } from 'react';
import Navbar from '../components/Navbar'


const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'create' },
    { id: 2, name: 'read' },
    { id: 3, name: 'update' },
    { id: 4, name: 'delete' }
  ]);
  const [newPermission, setNewPermission] = useState('');

  const addPermission = () => {
    if (newPermission.trim()) {
      const permission = {
        id: permissions.length + 1,
        name: newPermission
      };
      setPermissions([...permissions, permission]);
      setNewPermission('');
    }
  };

  return (
    <div className="flex">
        <Navbar/>

        <div className='p-4 w-full'>
      <h1 className="text-2xl font-bold mb-4 text-[#7067DB]">Permission Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter new permission..."
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={addPermission}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Permission
        </button>
      </div>

      <table className=" bg-white border w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Permission Name</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map(permission => (
            <tr key={permission.id}>
              <td className="px-4 py-2 border text-center">{permission.name}</td>
              <td className="px-4 py-2 border text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PermissionManagement;
