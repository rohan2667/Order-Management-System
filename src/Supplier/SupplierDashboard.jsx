import React from 'react'
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';

const SupplierDashboard = () => {

    const suppliers = [
        {
          sn: 1,
          name: 'Supplier One',
          email: 'supplier1@example.com',
          contact: '+1234567890',
          address: '123 Main Street, City',
          status: 'Active',
        },
        {
          sn: 2,
          name: 'Supplier Two',
          email: 'supplier2@example.com',
          contact: '+9876543210',
          address: '456 Market Street, Town',
          status: 'Inactive',
        },
        {
          sn: 3,
          name: 'Supplier Three',
          email: 'supplier3@example.com',
          contact: '+1122334455',
          address: '789 Broadway Ave, City',
          status: 'Active',
        },
        {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          }, 
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@极example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
          {
            sn: 3,
            name: 'Supplier Three',
            email: 'supplier3@example.com',
            contact: '+1122334455',
            address: '789 Broadway Ave, City',
            status: 'Active',
          },
        ];
  return (
    <div className='flex w-full bg-gray-100'>
        <div className='w-40%'>
        <Navbar/> 
        </div>

        <div className='flex flex-col h-full w-full'>
            <div className='bg-white p-2 border-b border-gray-200 shadow-md'>
        <input  className='focus outline-none bg-gray-200  rounded-sm p-2 ml-5 w-[50%]' placeholder='Search'/></div>
<h1 className='text-2xl font-medium ml-4 mt-5 text-[#7067DB]'>Supplier Management</h1>
        <div className='p-4 mt-4 w-full h-full flex-1 shadow-md ml-4 bg-white'>

            <div className='flex gap-56 mb-4'>
       <input className='focus outline-none border border-gray-300 rounded-sm p-2 w-[50%]' placeholder='Search'/>
  <Link to = '/create'>
       <Button variant="primary" size="lg" className='bg-blue-500 w-60 gap-4  rounded-md text-white flex text-center items-center'>
         <LuPlus className='ml-4' /> 
         <h1 className='text-center'>Create Supplier</h1>
        </Button>
        </Link>
       </div>

      <table className="  w-full text-left">
        <thead>
          <tr className="">
            <th className="px-4 py-2 ">SN</th>
            <th className="px-4 py-2 ">Supplier Name</th>
            <th className="px-4 py-2 ">Email Address</th>
            <th className="px-4 py-2 ">Contact</th>
            <th className="px-4 py极-2 ">Address</th>
            <th className="px-4 py-2 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 ">{supplier.sn}</td>
              <td className="px-4 py-2 ">{supplier.name}</td>
              <td className="px-4 py-2 ">{supplier.email}</td>
              <td className="px-4 py-2 ">{supplier.contact}</td>
              <td className="px-4 py-2 ">{supplier.address}</td>
              <td
                className={`px-4 py-2  font-semibold ${
                  supplier.status === 'Active' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {supplier.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>

        </div>
    </div>
  )
}

export default SupplierDashboard
