import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import { FaShoppingCart } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { BiSolidBusSchool } from "react-icons/bi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 2000 },
  { month: 'Apr', revenue: 2780 },
  { month: 'May', revenue: 1890 },
  { month: 'Jun', revenue: 2390 },
  { month: 'Jul', revenue: 3490 },
];

const recentActivities = [
  { time: '10:15 AM', description: 'New order #1245 received' },
  { time: '09:45 AM', description: 'Stock updated for Product A' },
  { time: '09:30 AM', description: 'Dispatch completed for Order #1234' },
  { time: '08:50 AM', description: 'New supplier added: ABC Supplies' },
  { time: '08:30 AM', description: 'Stock adjustment for Product B' },
  { time: '10:15 AM', description: 'New order #1245 received' },
  { time: '09:45 AM', description: 'Stock updated for Product A' },
  { time: '09:30 AM', description: 'Dispatch completed for Order #1234' },
  { time: '08:50 AM', description: 'New supplier added: ABC Supplies' },
  { time: '08:30 AM', description: 'Stock adjustment for Product B' },
  { time: '10:15 AM', description: 'New order #1245 received' },
  { time: '极09:45 AM', description: 'Stock updated for Product A' },
  { time: '09:30 AM', description: 'Dispatch completed for Order #1234' },
  { time: '08:50 AM', description: 'New supplier added: ABC Supplies' },
  { time: '08:30 AM', description: 'Stock adjustment for Product B' },
];

const Dashboard = ({ isSidebarCollapsed }) => {
  return (
    <div className='flex w-full'>
          <div>
          <Navbar /></div>

          <div className='flex flex-col h-full w-full'>
            <div className='bg-white p-2 border-b border-gray-200 shadow-md'>
        <input  className='focus outline-none bg-gray-200  rounded-sm p-2 ml-5 w-[50%]' placeholder='Search'/></div>
        <h1 className='p-2  text-3xl font-bold mt-6 ml-4 text-[#7067DB]'>Dashboard</h1>

        <div className='flex gap-16 w-full px-6 mt-10'>
            <div className='border border-gray-400 p-3 w-full rounded flex  gap-36'>
                <ul className=''>
                    <li className='font-bold text-[#626262]'>Total orders</li>
                    <li className='font-extrabold  text-gray-700 text-xl py-2'>1,245</li>
                    <li className='text-gray font-light text-xs'>+15% from last month</li>
                </ul>
                <FaShoppingCart className='size-7' />

            </div>

            <div className='border border-gray-400 p-3 w-full rounded flex gap-36'>
                <ul>
                    <li className='font-bold text-[#626262]'> Stock Items</li>
                    <li className='font-extrabold  text-gray-700 text-xl py-2 text-gray'>1,245</li>
                    <li className='text-gray font-light text-xs'>+15% from last month</li>
                </ul>
                <FaBox className='size-7'/>
            </div>


            <div className='border border-gray-400 p-3 w-full rounded flex gap-28'>
                <ul>
                    <li className='font-bold text-[#626262]'>Pending Dispatches</li>
                    <li className='text-bold  text-gray-700 text-xl py-2 font-extrabold'>1,245</li>
                    <li className='text-gray font-light text-xs'>+15% from last month</li>
                </ul>
                <BiSolidBusSchool className='size-7'/>
            </div>



        </div>
<div className='px-6 flex gap-10 mt-10'>
        <div className='border border-gray-400 p-3 w-full mt-4 rounded flex flex-col gap-4'>
                <ul>
                    <li className='font-bold text-[#626262]'>Total Revenue</li>
                    <li className='font-extrabold text-gray-700 text-xl py-2 ' >$10,000</li>
                    <li className='text-gray font-light text-xs'>+5% from last month</li>
                </ul>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={revenueData}
                            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line 
                                type="monotone" 
                                dataKey="revenue" 

                                stroke="#8884d8" 
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='border border-gray-400 p-3 w-full mt-4 rounded flex flex-col gap-4'>
                <ul>
                    <li className='font-bold text-[#626262]'>Recent Activities</li>
                    {recentActivities.map((activity, index) => (
                      <li key={index} className='text-gray-600 text-sm mt-1'>
                        <span className='font-medium'>{activity.time}</span> - {activity.description}
                      </li>
                    ))}
                </ul>
            </div>
            </div>


        </div>

  
</div>
  )
}

export default Dashboard
