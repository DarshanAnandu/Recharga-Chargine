import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import '..//../App.css'
import 'aos/dist/aos.css';

import Bg from '../assets/bg_3.svg'
import Bg2 from '../assets/bg_4.svg'
import Bg3 from '../assets/bg_1.svg'
import Car from '../assets/car.svg'
import Car2 from '../assets/car2.svg'
import Logo from '../assets/Logo.svg'
import Round from '../assets/round.svg'
import Round2 from '../assets/round2.svg'
import Peoples from '../assets/peoples.svg'
import Bg4 from '../assets/bg_6.svg'

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
            <div className='p-12' style={{ height: `calc(100vh - ${'108px'})` }}>
                <div className='flex items-center'>
                    <h1 className='font-bold leading-[53.04px] text-[51px]'>How it works </h1>
                    <img src={Logo} alt='' className='h-[74.73px] pl-6 w-auto' />
                </div>
                <div className='flex items-center my-14'>
                    <img src={Round} alt='' className='h-[66.31px] w-auto mr-14' />
                    <span className='font-bold leading-[96px] text-[96px] mr-14'>1</span>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold leading-[25.2px] text-[18px]'>Capture Kinetic Energy</h1>
                        <p className='font-normal leading-[26px] text-[20px]'>As you drive, your vehicle's movement is transformed into electric power for charging.</p>
                    </div>
                </div>
                <div className='flex items-center my-14'>
                    <img src={Round} alt='' className='h-[66.31px] w-auto mr-14' />
                    <span className='font-bold leading-[96px] text-[96px] mr-14'>2</span>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold leading-[25.2px] text-[18px]'>Convert to Electricity</h1>
                        <p className='font-normal leading-[26px] text-[20px]'>Our system efficiently converts kinetic energy to electricity, minimizing energy loss.</p>
                    </div>
                </div>
                <div className='flex items-center my-14'>
                    <img src={Round} alt='' className='h-[66.31px] w-auto mr-14' />
                    <span className='font-bold leading-[96px] text-[96px] mr-14'>3</span>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold leading-[25.2px] text-[18px]'>Recharge and Go</h1>
                        <p className='font-normal leading-[26px] text-[20px]'>The charger supplies your EV with energy, allowing you to charge up without stopping.</p>
                    </div>
                </div>
            </div>
        );
    }
    const Fifthp = () => {
        return (
            <div className='p-12 flex flex-col justify-around font-[Satoshi] leading-10' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${Round2})`, backgroundSize: 'cover' }}>
                <div className='flex justify-end'>
                    <div className='flex flex-col w-[50%]'>
                        <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>About Us</p>
                        <h1 className='font-bold leading-[53.04px] text-[51px] mt-6'>We proudly lead a transformative movement towards eco-conscious transportation.</h1>
                    </div>
                </div>
                <div className='flex justify-between mx-24'>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Passion</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Dedicated to revolutionizing the way the world charges its electric vehicles, Recharga Chargine is more than just a company; it's a commitment to environmental responsibility and technological advancement. </p>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Vision</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>We envision a world where electric vehicles seamlessly integrate into daily life, powered by an efficient and accessible charging infrastructure. Through cutting-edge technology and a commitment. </p>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Mission</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Our mission is twofold: to develop innovative charging solutions that redefine the EV experience and to inspire a global community to embrace electric mobility. </p>
                    </div>
                </div>
            </div>
        );
    }
    const Sixthp = () => {
        return (
            <div className='p-12 flex flex-col justify-end font-[Satoshi] leading-10' style={{ height: `calc(100vh - ${'108px'})` }}>
                <div className='flex justify-between mx-24 my-24'>
                    <div className='flex flex-col w-[50%]'>
                        <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Recharga Team</p>
                        <h1 className='font-bold leading-[53.04px] text-[51px] mt-6'>We are crafting the future of charging</h1>
                    </div>
                    <img src={Peoples} alt='' />
                </div>
                <div className='flex justify-between mx-24'>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Research Prowess</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Leading in charging technology, we stay ahead by researching the latest in tech, user experience, and sustainability.</p>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Dynamic Collaboration</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Our diverse team of engineers, designers, and sustainability enthusiasts collaborates seamlessly to ensure excellence in every aspect.</p>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Iterative Design</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Through constant feedback loops and continuous improvement, we've shaped a sleek, user-friendly charging solution.</p>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Passionate Sustainability</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Beyond expertise, our team's deep passion for sustainability fuels our drive to set new benchmarks for environmental responsibility in every product we create.</p>
                    </div>
                </div>
            </div>
        );
    }
    const Seventhp = () => {
        return (
            <div className='p-12 flex flex-col text-center items-center font-[Satoshi] leading-10' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${Bg4})`, backgroundSize: 'cover' }}>
                <h1 className='font-bold leading-[61.2px] text-[51px] w-[30%] mt-6'>Automated EV charging revolutionized</h1>
            </div>
        );
    }
    const Eighthp = () => {
        return (
            <div className='p-12 flex flex-col text-center items-center font-[Satoshi] leading-10' style={{ height: `calc(100vh - ${'108px'})` }}>
                <div>
                    <span className='font-[500] leading-[24px] text-[20px] w-[30%] my-6'>Invest with us</span>
                    <h1 className='font-bold leading-[61.2px] text-[51px] text-[#FFFFFF] w-[30%] my-6'>Invest in Future</h1>
                    <p className='font-[500] leading-[24px] text-[20px] w-[30%] text-[#FFFFFF] my-6'>Join us as we embark on a journey to power tomorrow's mobility. Invest in Recharga Chargine, where innovation meets sustainability, and together, we shape a cleaner, greener future.</p>
                    <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16'></button>
                </div>
                <div>
                    <div>
                        <div>
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0184 0.112896C17.8548 0.0384955 17.6772 0 17.4975 0C17.3178 0 17.1401 0.0384955 16.9766 0.112896L10.3757 3.11764L17.4925 6.35894L24.6143 3.11513L18.0184 0.112896ZM9.19291 13.0278V5.34226L16.2392 8.55085V17.0442L9.92522 14.1728C9.7054 14.0728 9.51899 13.9117 9.38825 13.7087C9.2575 13.5056 9.18794 13.2693 9.18788 13.0278H9.19291ZM18.7558 29.9188V21.5135L25.4296 24.5535V33.0468L19.1232 30.1755C18.9854 30.1128 18.8626 30.0259 18.7558 29.9188ZM27.9461 33.0519V24.5535L35 21.3424V29.0304C34.9999 29.2719 34.9304 29.5083 34.7996 29.7113C34.6689 29.9144 34.4825 30.0755 34.2627 30.1755L27.9461 33.0519ZM16.2342 21.5135V29.9288C16.1295 30.0314 16.0077 30.1148 15.8743 30.1755L9.55781 33.0519V24.5535L16.2342 21.5135ZM7.04127 24.5535V33.0468L0.737345 30.1755C0.517523 30.0755 0.331114 29.9144 0.200369 29.7113C0.0696243 29.5083 6.6868e-05 29.2719 0 29.0304V21.3449L7.0463 24.5535H7.04127ZM18.7507 17.0492V8.54833L25.8046 5.33723V13.0278C25.8045 13.2693 25.7349 13.5056 25.6042 13.7087C25.4735 13.9117 25.2871 14.0728 25.0672 14.1728L18.7507 17.0492ZM26.1695 16.1181C26.3331 16.0437 26.5107 16.0052 26.6904 16.0052C26.8701 16.0052 27.0477 16.0437 27.2113 16.1181L33.8046 19.1178L26.6828 22.3616L19.5736 19.1178L26.172 16.113L26.1695 16.1181ZM7.78365 16.1181C7.94724 16.0437 8.12486 16.0052 8.30457 16.0052C8.48428 16.0052 8.66191 16.0437 8.8255 16.1181L15.4188 19.1178L8.29954 22.3641L1.18529 19.1178L7.78365 16.1181Z" fill="#00FE5E" />
                            </svg>
                        </div>
                        <p></p>
                    </div>
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
            <Fifthp />
            <Sixthp />
            <Seventhp />
            <Eighthp />
        </div>
    )
}

export default MainPage