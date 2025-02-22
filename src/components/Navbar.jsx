import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { TbCategoryMinus } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className='h-screen shadow-md bg-white border border-gray-200'>
       
<div className='p-2 border  border-gray-200 h-full w-full'>
<div className='flex flex-col h-full w-full'>
          <div className=' flex  p-2 gap-28 w-full'> 
                    <Link to = '/'>   <h1 className='text-lg font-bold tracking-widest text-[#7067DB]'>OMS </h1> </Link>
            <CiMenuBurger 
              className='size-6 font-light cursor-pointer'
              onClick={toggleSidebar}
            />
        
            </div>
            <div className='border border-gray-100'></div>
<img src="/src/images/images.jpg" alt="Logo" className="size-12 rounded-full mt-3" />

<div className='flex gap-8 w-full'>
<h1 className='font-medium text-sm mt-1'>Gal Gadot</h1>
<MdKeyboardArrowDown className='mt-2' />
</div>

<h1 className='text-gray-400 mt-1 text-xs'>Super Administrator</h1>

<h1 className='font-bold mt-4 text-sm tracking-widest text-[#7067DB]'>HOME</h1>

<div className='flex gap-4 w-full'>
<RxDashboard className='mt-1' />
<Link to = '/'> <h1 className='text-gray-600 text-sm mt-1'>Dashboard</h1> </Link>
</div>


<h1 className='font-bold mt-4 text-sm tracking-widest text-[#7067DB]'>SYSTEM CATLOG</h1>

<Link to= '/supplier'> 
<div className='flex gap-4'>
<BsPeople className='mt-1' />
  <h1 className='text-gray-600 text-sm mt-1'>Supplier</h1>
</div> </Link>

<Link to = '/category'>
<div className='flex gap-4'>
<TbCategoryMinus className='mt-1' />
  <h1 className='text-gray-600 text-sm mt-1'>Category</h1>
</div></Link>

<Link to = '/product'>
<div className='flex gap-4'>
<MdOutlineProductionQuantityLimits className='mt-1' />
  <h1 className='text-gray-600 text-sm mt-1'>Product</h1>
</div></Link>

<Link to = '/stock'>
<div className='flex gap-4'>
<RxDashboard className='mt-1' />
  <h1 className='text-gray-600 text-sm mt-1'>Stock</h1>
</div> </Link>


<h1 className='font-bold mt-4 text-sm tracking-widest text-[#7067DB]'>USER AUTHORIZATION</h1>
<div className='gap-20'>
<div className='flex gap-4'>
<BsPeople className='mt-1' />
  <Link to="/users" className='text-gray-600 text-sm mt-1'>Users</Link>
</div>

<div className='flex gap-4'>
<TbCategoryMinus className='mt-1' />
  <Link to="/roles" className='text-gray-600 text-sm mt-1'>Roles</Link>
</div>

<div className='flex gap-4'>
<CiSquareCheck className='mt-1' />
  <Link to="/permissions" className='text-gray-600 text-sm mt-1'>Permissions</Link>
</div>

</div>




</div>
        
            
        </div>
    </div>
  )
}

export default Navbar
