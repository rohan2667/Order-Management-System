import React, { useState } from 'react';
import Navbar from '../components/Navbar'


const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  
  
    
    
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   
    <div className="flex">
         <Navbar/>

         <div className='w-full p-4'>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3 focus:outline-0"
        />
      </div>

      <table className="min-w-full bg-white border-gray-500">
        <thead className=' border border-gray-500'>
          <tr className=' border border-gray-500'>
            <th className="px-4 py-2 border border-gray-500">Name</th>
            <th className="px-4 py-2 border border-gray-500">Email</th>
            <th className="px-4 py-2 border border-gray-500">Role</th>
            <th className="px-4 py-2 border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className='items-center'>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className="px-4 py-2 border text-center">{user.name}</td>
              <td className="px-4 py-2 border text-center">{user.email}</td>
              <td className="px-4 py-2 border text-center">{user.role}</td>
              <td className="px-4 py-2 border text-center">
                <button className="text-white bg-blue-400 border p-1 rounded-lg border-gray-200 hover:text-blue-100 mr-2">Edit</button>
                <button className="text-white bg-red-400 border p-1 rounded-lg border-gray-200 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add New User
        </button>
      </div>
      </div>
    </div>
  );
};

export default UserManagement;
