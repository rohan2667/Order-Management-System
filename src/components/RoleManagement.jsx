import React, { useState } from 'react';
import Navbar from '../components/Navbar'


const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 1, name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
    { id: 2, name: 'Editor', permissions: ['create', 'read', 'update'] }
  ]);
  const [newRole, setNewRole] = useState('');

  const addRole = () => {
    if (newRole.trim()) {
      const role = {
        id: roles.length + 1,
        name: newRole,
        permissions: []
      };
      setRoles([...roles, role]);
      setNewRole('');
    }
  };

  return (
    <div className="flex">

<Navbar/>

        <div className='p-4 w-full'>
      <h1 className="text-2xl font-bold mb-4 text-[#7067DB]">Role Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter new role..."
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={addRole}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Role
        </button>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border ">Role Name</th>
            <th className="px-4 py-2 border">Permissions</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td className="px-4 py-2 border text-center">{role.name}</td>
              <td className="px-4 py-2 border text-center">
                {role.permissions.join(', ')}
              </td>
              <td className="px-4 py-2 border text-center">
                <button className="text-white bg-blue-400 p-1 rounded-lg hover:text-blue-700 mr-2">Edit</button>
                <button className="text-white bg-red-400 border p-1 rounded-lg border-gray-200 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RoleManagement;
