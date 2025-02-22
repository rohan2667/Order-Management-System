import React from 'react'
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button';

const CreateSuppliers = () => {
  return (
  <div className='flex'>
    <div className='w-[20%]'>
    <Navbar /></div>

    <div className='flex flex-col h-full w-full'>
            <div className='bg-white p-2 border-b border-gray-200 shadow-md'>
        <input  className='focus outline-none bg-gray-200  rounded-sm p-2 ml-5 w-[50%]' placeholder='Search'/></div>
        <h1 className='ml-7 mt-2 tracking-wider text-sm '>SUPPLIER / <span className='text-blue-800 '> CREATE SUPPLIER </span></h1>
        <h1 className='text-xl ml-7 mt-2'> Supplier Management</h1>

        <div className='border border-gray-200  p-2 mx-7 mt-2'>
        <h1 className='mt-1'>Create Suppliers</h1>
            <h1 className='mt-1'>Please fill up the form below</h1>

<div className='flex gap-12 w-full'>
<div className='flex flex-col mt-2 w-full'>
            <h1>Company name</h1>
            <input className='focus outline-none bg-gray-200 w-full rounded-sm p-2' placeholder='Enter your company name'/>
            </div>

            <div className='flex flex-col mt-2 w-full'>
            <h1>Company name</h1>
            <input className='focus outline-none bg-gray-200 w-full rounded-sm p-2' placeholder='Enter your company name'/>
            </div>
            </div>

            <div className='flex flex-col mt-2 w-full'>
            <h1>Contact Person</h1>
            <input className='focus outline-none bg-gray-200 w-full rounded-sm p-2' placeholder='Enter your company name'/>
            </div>

            <div className='flex gap-12 w-full'>
<div className='flex flex-col mt-2 w-full'>
            <h1>E-mail</h1>
            <input className='focus outline-none bg-gray-200 w-full rounded-sm p-2' placeholder='example@gmail.com'/>
            </div>

            <div className='flex flex-col mt-2 w-full'>
            <h1>Phone Number</h1>
            <input className='focus outline-none bg-gray-200 w-full rounded-sm p-2' placeholder='Enter your phone number'/>
            </div>
            </div>

            <Button variant="primary" size="lg" className='bg-blue-500 w-60 gap-4 p-2 mt-3 rounded-sm mb-2  text-white flex text-center '>
         <h1 className='text-center ml-12'>Create Supplier</h1>
        </Button>
        </div>
        </div>
  </div>
  )
}

export default CreateSuppliers