import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SideNav = () => {
    return (
        <div className='flex justify-end'>
            <div className='flex flex-col h-full bg-[#13131396] w-[250px] absolute' style={{ backdropFilter: 'blur(20px)' }}>
                <button className='border-b-2 border-transparent'>Home</button>
                <button className='border-b-2 border-transparent'>Product</button>
                <button className='border-b-2 border-transparent'>Investors</button>
                <button className='border-b-2 border-transparent'>Newsletters</button>
                <button className='border-b-2 border-transparent'>Careers</button>
                <button className='border-b-2 border-transparent'>About Us</button>
                <div className='flex border border-[#00FE5E] rounded-3xl px-3 py-1 items-center'>
                    <IoSearchSharp className='cursor-pointer text-[#fff]' />
                    <input type="text" className='pl-3 bg-transparent outline-none' />
                </div>
            </div>
        </div>
    )
}

export default SideNav