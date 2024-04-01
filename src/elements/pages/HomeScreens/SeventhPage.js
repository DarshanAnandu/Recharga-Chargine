import React from 'react'
import Bg4 from '../../assets/bg_6.svg'

const SeventhPage = () => {
    return (
        <div className='p-12 flex flex-col text-center items-center font-[Satoshi] leading-10' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${Bg4})`, backgroundSize: 'cover' }}>
            <h1 className='font-bold leading-[61.2px] text-[51px] w-[30%] w-fp red-fonsiz mt-6' data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="950">Automated EV charging revolutionized</h1>
        </div>
    );
}

export default SeventhPage