import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SideNav = () => {
    return (
        <div className="fixed top-[108px] right-0 h-full bg-[#13131396] w-[250px] flex flex-col px-3 py-6" style={{ backdropFilter: 'blur(20px)' }}>
            <div className="flex flex-col">
                <button className="border-b-2 py-2 px-3 border-transparent text-white">Home</button>
                <button className="border-b-2 py-2 px-3 border-transparent text-white">Product</button>
                <button className="border-b-2 py-2 px-3 border-transparent text-white">Investors</button>
                <button className="border-b-2 py-2 px-3 border-transparent text-white">Newsletters</button>
                <button className="border-b-2 py-2 px-3 border-transparent text-white">Careers</button>
                <button className="border-b-2 py-2 px-3 border-transparent text-white">About Us</button>
            </div>
            <div className="flex border border-[#00FE5E] rounded-3xl mt-28 items-center">
                <IoSearchSharp className="cursor-pointer text-white ml-2" />
                <input type="text" className="pl-3 bg-transparent outline-none text-white" />
            </div>
        </div>
    );
};

export default SideNav;
