import React from 'react'
import Logo from '../assets/Logo.png'
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {
    return (
        <div className='h-[108px] w-full bg-black flex flex-wrap z-[999] sticky top-0 justify-around items-center'>
            <div className='flex items-center'>
                <img src={Logo} alt='' className='h-[34.73px] w-auto' />
                <div className='flex flex-col pl-3'>
                    <span>Recharga </span>
                    <span> Chargine</span>
                </div>
            </div>
            <div>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Home</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Product</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Investors</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Newsletters</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Careers</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>About Us</button>
            </div>
            <div className='flex border border-[#00FE5E] rounded-3xl px-3 py-1 items-center'>
                <IoSearchSharp className='cursor-pointer' />
                <input type="text" className='pl-3 bg-transparent outline-none' />
            </div>
        </div>
    )
}

export default NavBar