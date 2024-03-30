import React, { useState } from 'react'
import Bg from '../assets/bg_3.png'
import Bg2 from '../assets/bg_4.png'
import Bg3 from '../assets/bg_1.png'
import Car from '../assets/car.png'

const Fp = () => {
    const [learn, setLearn] = useState(true)
    return (
        <div className='' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${learn ? Bg : Bg2})`, backgroundSize: 'cover' }} onMouseLeave={() => setLearn(true)}>
            {learn ?
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-[52px] text-[#F5F5F5] w-[60%] font-bold leading-[54.02px] my-12 mt-24'>Powered by your car for your car</h2>
                    <p className='w-[30%] text-[20px] text-[#FFFFFF] font-normal leading-[26px]'>Imagine a world where charging your electric vehicle is not just a necessity but a seamless and enjoyable experience. Our product, a state-of-the-art charging machine, is designed to make this vision a reality. </p>
                    <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                    <img src={Car} alt='' className='h-auto w-[60%]' />
                </div>
                :
                <div className='p-24'>
                    <h2 className='font-[500] text-[20px] text-[#00DD52] leading-[24px]'>Recharga Chargine</h2>
                    <p className='w-[60%] font-normal text-[20px] leading-[38px]'>Recharga Chargine may address other pain points in the EV ecosystem, such as range anxiety, charging infrastructure limitations, and the environmental impact of battery production and disposal. <br />
                        Through comprehensive solutions encompassing energy management, infrastructure development, and environmental stewardship, Recharga Chargine aims to accelerate the transition to a more sustainable transportation paradigm. <br /> <br />

                        The pain point addressed by Recharga Chargine revolves around the sustainability of electric vehicles (EVs). <br />
                        While EVs offer a promising solution to reduce greenhouse gas emissions and dependence on fossil fuels, they are not entirely "green" due to the energy sources powering them. <br />

                        The majority of electricity still comes from conventional grids, which may rely on non-renewable sources like coal or natural gas. This dependency introduces carbon emissions and environmental concerns associated with conventional energy production methods.
                    </p>
                </div>
            }
        </div>
    );
}
const Sp = () => {
    return (
        <div className='flex flex-col items-center text-center' style={{ height: `calc(100vh - ${'108px'})` }}>
            <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] w-[60%] mt-[10%]'>Visionary Innovation</p>
            <h1 className='font-bold leading-[61.2px] text-[51px] w-[60%] mt-12'>Reimagining energy for eMobility, we create sustainable charging solutions for electric vehicles.</h1>
        </div>
    );
}
const Tp = () => {
    return (
        <div className='flex justify-end p-16' style={{ height: `calc(100vh - ${'108px'})` }}>
            <div className='w-[30%] flex flex-col items-start'>
                <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] mt-[10%]'>Our Product</p>
                <h1 className='font-bold leading-[61.2px] text-[51px] mt-16'>Charge as you drive</h1>
                <p className='font-normal leading-[26px] text-[20px] mt-16'>Experience seamless and enjoyable electric vehicle charging with our state-of-the-art machine. Harnessing kinetic energy, it charges efficiently on the go.</p>
                <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16'>Learn More</button>
            </div>
        </div>
    );
}
const MainPage = () => {
    return (
        <div className='h-full w-full'>
            <Fp />
            <Sp />
            <Tp />
        </div>
    )
}

export default MainPage