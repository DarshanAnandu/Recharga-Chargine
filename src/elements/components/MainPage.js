import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import '..//../App.css'
import 'aos/dist/aos.css';

import Bg from '../assets/bg_3.svg'
import Bg2 from '../assets/bg_4.svg'
import Bg3 from '../assets/bg_1.svg'
import Car from '../assets/car.svg'
import Car2 from '../assets/car2.svg'

const MainPage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const Fp = () => {
        const [learn, setLearn] = useState(true)
        return (
            <div className='w-full' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${learn ? Bg : Bg2})`, backgroundSize: 'cover' }} onMouseLeave={() => setLearn(true)}>
                {learn ?
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-[52px] text-[#F5F5F5] w-[60%] font-bold leading-[54.02px] my-12 mt-24'>Powered by your car for your car</h2>
                        <p className='w-[30%] text-[20px] text-[#FFFFFF] font-normal leading-[26px]'>Imagine a world where charging your electric vehicle is not just a necessity but a seamless and enjoyable experience. Our product, a state-of-the-art charging machine, is designed to make this vision a reality. </p>
                        <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                        <img src={Car} alt='' data-aos='fade-up' data-aos-offset='100' data-aos-delay='20' className='h-auto w-[50%] mt-12' />
                    </div>
                    :
                    <div className='p-24' data-aos='fade-right' data-aos-offset='0' data-aos-delay='20'>
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
            <div className='flex flex-col items-center text-center' data-aos='fade-left' data-aos-offset='0' data-aos-delay='20' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${Bg2})`, backgroundSize: 'cover' }}>
                {/* <div className='flex flex-col items-center text-center' style={{ height: `calc(100vh - ${'108px'})`, background: `url(${Bg2})`, backgroundPosition: `${scrollPosition}px 50%`, animation: 'slideBackground 10s linear infinite', backgroundSize: 'cover' }}> */}
                <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] w-[60%] mt-[10%]'>Visionary Innovation</p>
                <h1 className='font-bold leading-[61.2px] text-[51px] w-[60%] mt-12'>Reimagining energy for eMobility, we create sustainable charging solutions for electric vehicles.</h1>
            </div>
        );
    }
    const Tp = () => {
        const [learn, setLearn] = useState(true)
        return (
            <div className='flex justify-end' style={{ height: `calc(100vh - ${'108px'})` }} onMouseLeave={() => setLearn(true)}>
                {learn ?
                    <div className='flex justify-between'>
                        <div className='flex items-end'>
                            <img src={Car2} alt='' data-aos='fade-up-right' data-aos-offset='0' data-aos-delay='20' className='h-[600px] w-auto' />
                        </div>
                        <div className='w-[30%] flex flex-col items-start p-6'>
                            <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] mt-[10%]'>Our Product</p>
                            <h1 className='font-bold leading-[61.2px] text-[51px] mt-16'>Charge as you drive</h1>
                            <p className='font-normal leading-[26px] text-[20px] mt-16'>Experience seamless and enjoyable electric vehicle charging with our state-of-the-art machine. Harnessing kinetic energy, it charges efficiently on the go.</p>
                            <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                        </div>
                    </div>
                    :
                    <div className='p-24' data-aos='fade-right' data-aos-offset='0' data-aos-anchor-placement="top-center" data-aos-delay='20'>
                        {/* <h2 className='font-[500] text-[20px] text-[#00DD52] leading-[24px]'>Recharga Chargine</h2> */}
                        <p className='w-[60%] font-normal text-[20px] leading-[38px]'>Recharga Chargine introduces an innovative product for electric vehicles (EVs), <br />
                            revolutionizing on-the-go charging. This cutting-edge technology captures kinetic energy during vehicle operation, seamlessly integrating with existing EV drivetrains. With minimal vehicle modifications, it offers continuous charging while in motion, eliminating the need for frequent stops at charging stations.  <br />
                            <br />
                            Unlike traditional charging methods that require the vehicle to be stationary at charging stations, our system enables continuous charging while the vehicle is in motion. This innovative approach eliminates the need for frequent stops to recharge, enhancing the convenience and efficiency of EVs.  <br />
                            <br />
                            Our system boasts high energy conversion efficiency, ensuring optimal utilization of kinetic energy captured during vehicle operation. This efficiency maximizes the amount of energy transferred to the EV battery, extending the vehicle's range and reducing overall energy consumption.</p>
                    </div>
                }
            </div>
        );
    }
    const Forthp = () => {
        return (
            <div className='flex justify-end' style={{ height: `calc(100vh - ${'108px'})` }}>
                <div>
                    <h1></h1>
                </div>
            </div>
        );
    }
    return (
        <div className='h-full w-full'>
            <Fp />
            <Sp />
            <Tp />
            <Forthp />
        </div>
    )
}

export default MainPage