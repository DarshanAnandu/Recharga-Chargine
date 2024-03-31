import React from 'react'
import Logo from '../assets/Logo.svg'
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ burger, setBurger }) => {
    return (
        <div className='h-[108px] w-full bg-black flex flex-wrap z-[999] sticky top-0 justify-around justify-nav items-center'>
            <div className='flex items-center'>
                <img src={Logo} alt='' className='h-[34.73px] w-auto' />
                <div className='flex flex-col pl-3'>
                    <span>Recharga </span>
                    <span> Chargine</span>
                </div>
            </div>
            <div className='ordinary-nav-off'>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Home</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Product</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Investors</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Newsletters</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>Careers</button>
                <button className='mx-4 border-b-2 border-transparent hover:border-[#00FE5E]'>About Us</button>
            </div>
            <div className='flex border border-[#00FE5E] ordinary-nav-off rounded-3xl px-3 py-1 items-center'>
                <IoSearchSharp className='cursor-pointer' />
                <input type="text" className='pl-3 bg-transparent outline-none' />
            </div>
            <GiHamburgerMenu onClick={() => setBurger(!burger)} className='text-[#fff] text-[25px] hidden burgar-nav-on cursor-pointer' />
        </div>
    )
}

export default NavBar