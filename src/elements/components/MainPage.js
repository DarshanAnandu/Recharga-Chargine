import React, { useEffect, useRef, useState } from 'react'
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
                        <h2 className='text-[52px] text-[#F5F5F5] w-[60%] w-fp font-bold leading-[54.02px] my-12 mt-24'>Powered by your car for your car</h2>
                        <p className='w-[30%] text-[20px] w-fp text-[#FFFFFF] font-normal leading-[26px]'>Imagine a world where charging your electric vehicle is not just a necessity but a seamless and enjoyable experience. Our product, a state-of-the-art charging machine, is designed to make this vision a reality. </p>
                        <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                        <img src={Car} alt='' data-aos='fade-up' data-aos-offset='100' data-aos-delay='20' className='h-auto w-[50%] mt-12' />
                    </div>
                    :
                    <div className='p-24' data-aos='fade-right' data-aos-offset='0' data-aos-delay='20'>
                        <h2 className='font-[500] text-[20px] text-[#00DD52] leading-[24px]'>Recharga Chargine</h2>
                        <p className='w-[60%] w-fp leading font-normal text-[20px] leading-[38px]'>Recharga Chargine may address other pain points in the EV ecosystem, such as range anxiety, charging infrastructure limitations, and the environmental impact of battery production and disposal. <br />
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
            <div className='flex flex-col items-center text-center w-full h-100' data-aos='fade-left' data-aos-offset='0' data-aos-delay='20' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${Bg2})`, backgroundSize: 'cover' }}>
                {/* <div className='flex flex-col items-center text-center' style={{ height: `calc(100vh - ${'108px'})`, background: `url(${Bg2})`, backgroundPosition: `${scrollPosition}px 50%`, animation: 'slideBackground 10s linear infinite', backgroundSize: 'cover' }}> */}
                <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] w-[60%] mt-[10%]'>Visionary Innovation</p>
                <h1 className='font-bold leading-[61.2px] text-[51px] red-fonsiz w-[60%] w-fp mt-12'>Reimagining energy for eMobility, we create sustainable charging solutions for electric vehicles.</h1>
            </div>
        );
    }
    const Tp = () => {
        const [learn, setLearn] = useState(true)
        return (
            <div className='flex justify-end h-100' onMouseLeave={() => setLearn(true)}>
                {learn ?
                    <div className='flex justify-between flx-clmn'>
                        <div className='flex items-end'>
                            <img src={Car2} alt='' data-aos='fade-up-right' data-aos-offset='0' data-aos-delay='20' className='h-[600px] w-auto' />
                        </div>
                        <div className='w-[30%] flex flex-col items-start p-6 w-fp'>
                            <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] mt-[10%]'>Our Product</p>
                            <h1 className='font-bold leading-[61.2px] text-[51px] mt-16'>Charge as you drive</h1>
                            <p className='font-normal leading-[26px] text-[20px] mt-16'>Experience seamless and enjoyable electric vehicle charging with our state-of-the-art machine. Harnessing kinetic energy, it charges efficiently on the go.</p>
                            <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                        </div>
                    </div>
                    :
                    <div className='p-24 red-pad' data-aos='fade-right' data-aos-offset='0' data-aos-anchor-placement="top-center" data-aos-delay='20'>
                        {/* <h2 className='font-[500] text-[20px] text-[#00DD52] leading-[24px]'>Recharga Chargine</h2> */}
                        <p className='w-[60%] font-normal w-fp text-[20px] leading-[38px]'>Recharga Chargine introduces an innovative product for electric vehicles (EVs), <br />
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
            <div className='p-12 h-100'>
                <div className='flex items-center'>
                    <h1 className='font-bold leading-[53.04px] text-[51px] red-fonsiz'>How it works </h1>
                    <img src={Logo} alt='' className='h-[74.73px] pl-6 w-auto' />
                </div>
                <div className='flex items-center my-14'>
                    <img src={Round} alt='' className='h-[66.31px] w-auto mr-14 mr' />
                    <span className='font-bold leading-[96px] text-[96px] red-fonsiz-2 mr-14 mr'>1</span>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold leading-[25.2px] text-[18px]'>Capture Kinetic Energy</h1>
                        <p className='font-normal leading-[26px] text-[20px]'>As you drive, your vehicle's movement is transformed into electric power for charging.</p>
                    </div>
                </div>
                <div className='flex items-center my-14'>
                    <img src={Round} alt='' className='h-[66.31px] w-auto mr-14 mr' />
                    <span className='font-bold leading-[96px] text-[96px] red-fonsiz-2 mr-14 mr'>2</span>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold leading-[25.2px] text-[18px]'>Convert to Electricity</h1>
                        <p className='font-normal leading-[26px] text-[20px]'>Our system efficiently converts kinetic energy to electricity, minimizing energy loss.</p>
                    </div>
                </div>
                <div className='flex items-center my-14'>
                    <img src={Round} alt='' className='h-[66.31px] w-auto mr-14 mr' />
                    <span className='font-bold leading-[96px] text-[96px] red-fonsiz-2 mr-14 mr'>3</span>
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
            <div className='p-12 flex flex-col justify-around font-[Satoshi] leading-10 h-100' style={{ backgroundImage: `url(${Round2})`, backgroundPositionX: '-1000px', backgroundPositionY: '-900px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='flex justify-end'>
                    <div className='flex flex-col w-[50%] w-fp'>
                        <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>About Us</p>
                        <h1 className='font-bold leading-[53.04px] text-[51px] mt-6'>We proudly lead a transformative movement towards eco-conscious transportation.</h1>
                    </div>
                </div>
                <div className='flex flx-clmn justify-between mx-24 marg-x marg-y'>
                    <div className='w-[20%] w-fp mr'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Passion</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Dedicated to revolutionizing the way the world charges its electric vehicles, Recharga Chargine is more than just a company; it's a commitment to environmental responsibility and technological advancement. </p>
                    </div>
                    <div className='w-[20%] w-fp mr'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Vision</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>We envision a world where electric vehicles seamlessly integrate into daily life, powered by an efficient and accessible charging infrastructure. Through cutting-edge technology and a commitment. </p>
                    </div>
                    <div className='w-[20%] w-fp mr'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Mission</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Our mission is twofold: to develop innovative charging solutions that redefine the EV experience and to inspire a global community to embrace electric mobility. </p>
                    </div>
                </div>
            </div>
        );
    }
    const Sixthp = () => {
        return (
            <div className='p-12 red-pad-2 flex flex-col justify-end font-[Satoshi] leading-10 h-100'>
                <div className='flex flx-clmn justify-between mx-24 my-24 marg-x'>
                    <div className='flex flex-col w-[50%] w-fw mr'>
                        <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Recharga Team</p>
                        <h1 className='font-bold leading-[53.04px] text-[51px] red-fonsiz mt-6'>We are crafting the future of charging</h1>
                    </div>
                    <img src={Peoples} alt='' />
                </div>
                <div className='flex flx-clmn justify-between mx-24 marg-x'>
                    <div className='w-[20%] w-fw mr'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Research Prowess</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Leading in charging technology, we stay ahead by researching the latest in tech, user experience, and sustainability.</p>
                    </div>
                    <div className='w-[20%] w-fw mr'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Dynamic Collaboration</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Our diverse team of engineers, designers, and sustainability enthusiasts collaborates seamlessly to ensure excellence in every aspect.</p>
                    </div>
                    <div className='w-[20%] w-fw mr'>
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Iterative Design</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Through constant feedback loops and continuous improvement, we've shaped a sleek, user-friendly charging solution.</p>
                    </div>
                    <div className='w-[20%] w-fw mr'>
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
                <h1 className='font-bold leading-[61.2px] text-[51px] w-[30%] w-fp red-fonsiz mt-6'>Automated EV charging revolutionized</h1>
            </div>
        );
    }
    const Eighthp = () => {
        const [join, setJoin] = useState(false)
        const [submit, setSubmit] = useState(false)
        const formRef = useRef(null);
        const abcRef = useRef(null);
        useEffect(() => {
            const handleClickOutside = (event) => {
                if ((!formRef.current || !formRef.current.contains(event.target)) &&
                    (!abcRef.current || !abcRef.current.contains(event.target))) {
                    setJoin(false);
                    setSubmit(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        return (
            <div className='font-[Satoshi] h-100'>
                {!join ?
                    <div className='p-12 flex flx-clmn'>
                        <div className='flex justify-center'>
                            <div className='w-[50%]'>
                                <span className='font-[500] leading-[24px] text-[20px] text-[#00FE5E] my-6'>Invest with us</span>
                                <h1 className='font-bold leading-[61.2px] text-[51px] text-[#FFFFFF] my-6'>Invest in Future</h1>
                                <p className='font-[500] leading-[24px] text-[20px] text-[#FFFFFF] my-6'>Join us as we embark on a journey to power tomorrow's mobility. Invest in Recharga Chargine, where innovation meets sustainability, and together, we shape a cleaner, greener future.</p>
                                <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] transition border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setJoin(true)}>Join Us</button>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col my-8 w-[70%] w-fp'>
                                <div className='flex items-center'>
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0184 0.112896C17.8548 0.0384955 17.6772 0 17.4975 0C17.3178 0 17.1401 0.0384955 16.9766 0.112896L10.3757 3.11764L17.4925 6.35894L24.6143 3.11513L18.0184 0.112896ZM9.19291 13.0278V5.34226L16.2392 8.55085V17.0442L9.92522 14.1728C9.7054 14.0728 9.51899 13.9117 9.38825 13.7087C9.2575 13.5056 9.18794 13.2693 9.18788 13.0278H9.19291ZM18.7558 29.9188V21.5135L25.4296 24.5535V33.0468L19.1232 30.1755C18.9854 30.1128 18.8626 30.0259 18.7558 29.9188ZM27.9461 33.0519V24.5535L35 21.3424V29.0304C34.9999 29.2719 34.9304 29.5083 34.7996 29.7113C34.6689 29.9144 34.4825 30.0755 34.2627 30.1755L27.9461 33.0519ZM16.2342 21.5135V29.9288C16.1295 30.0314 16.0077 30.1148 15.8743 30.1755L9.55781 33.0519V24.5535L16.2342 21.5135ZM7.04127 24.5535V33.0468L0.737345 30.1755C0.517523 30.0755 0.331114 29.9144 0.200369 29.7113C0.0696243 29.5083 6.6868e-05 29.2719 0 29.0304V21.3449L7.0463 24.5535H7.04127ZM18.7507 17.0492V8.54833L25.8046 5.33723V13.0278C25.8045 13.2693 25.7349 13.5056 25.6042 13.7087C25.4735 13.9117 25.2871 14.0728 25.0672 14.1728L18.7507 17.0492ZM26.1695 16.1181C26.3331 16.0437 26.5107 16.0052 26.6904 16.0052C26.8701 16.0052 27.0477 16.0437 27.2113 16.1181L33.8046 19.1178L26.6828 22.3616L19.5736 19.1178L26.172 16.113L26.1695 16.1181ZM7.78365 16.1181C7.94724 16.0437 8.12486 16.0052 8.30457 16.0052C8.48428 16.0052 8.66191 16.0437 8.8255 16.1181L15.4188 19.1178L8.29954 22.3641L1.18529 19.1178L7.78365 16.1181Z" fill="#00FE5E" />
                                    </svg>
                                    <h1 className='font-[400] leading-[28px] text-[23px] pl-4 text-[#00FE5E]'> Innovation Unleashed</h1>
                                </div>
                                <p className='font-[400] leading-[34px] text-[20px] text-[#FFFFFF] my-6'>Our team is at the forefront of charging technology, driving innovation that shapes the future of eco-conscious mobility.</p>
                            </div>
                            <div className='flex flex-col my-8 w-[70%] w-fp'>
                                <div className='flex items-center'>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.59129 5.9736C7.62115 5.9736 8.45602 5.13873 8.45602 4.10887C8.45602 3.07901 7.62115 2.24414 6.59129 2.24414C5.56143 2.24414 4.72656 3.07901 4.72656 4.10887C4.72656 5.13873 5.56143 5.9736 6.59129 5.9736Z" fill="#00FE5E" />
                                        <path d="M28.3452 11.7705C29.3751 11.7705 30.2099 10.9356 30.2099 9.90574C30.2099 8.87588 29.3751 8.04102 28.3452 8.04102C27.3153 8.04102 26.4805 8.87588 26.4805 9.90574C26.4805 10.9356 27.3153 11.7705 28.3452 11.7705Z" fill="#00FE5E" />
                                        <path d="M12.185 24.6259C13.2149 24.6259 14.0498 23.7911 14.0498 22.7612C14.0498 21.7314 13.2149 20.8965 12.185 20.8965C11.1552 20.8965 10.3203 21.7314 10.3203 22.7612C10.3203 23.7911 11.1552 24.6259 12.185 24.6259Z" fill="#00FE5E" />
                                        <path d="M4.17473 9.47723C4.74389 8.97586 5.46806 8.68532 6.22593 8.65427L6.40494 8.64681C6.92821 8.62543 7.45044 8.7095 7.94057 8.89402C8.4307 9.07854 8.87871 9.35974 9.25797 9.72089C9.67766 10.1204 9.95732 10.6447 10.0555 11.2158L10.3296 12.8107L2.82031 12.8064L2.9583 11.7578C3.07481 10.8758 3.50696 10.0658 4.17473 9.47786M25.7161 15.4922L26.0847 15.1671C26.5755 14.7349 27.2001 14.4845 27.8537 14.4579L28.2732 14.4405C28.7714 14.4202 29.2687 14.5004 29.7353 14.6761C30.2019 14.8519 30.6285 15.1197 30.9895 15.4636C31.4464 15.8986 31.7509 16.4692 31.8578 17.0909L32.1189 18.6076L24.6097 18.6026L24.7905 17.227C24.8792 16.5561 25.208 15.9394 25.7161 15.4922ZM10.1325 27.8355C10.4858 27.5243 10.9352 27.344 11.4055 27.3245L11.6865 27.3134C12.318 27.2875 12.9483 27.3889 13.5399 27.6115C14.1315 27.8342 14.6722 28.1735 15.13 28.6093C15.3886 28.8555 15.5608 29.1787 15.621 29.5305L15.9536 31.4624L8.44433 31.4574L8.52451 30.8501C8.67837 29.6839 9.24964 28.6129 10.1325 27.8355Z" fill="#00FE5E" />
                                        <path d="M6.5952 5.97311C7.62506 5.97311 8.45992 5.13824 8.45992 4.10838C8.45992 3.07852 7.62506 2.24365 6.5952 2.24365C5.56534 2.24365 4.73047 3.07852 4.73047 4.10838C4.73047 5.13824 5.56534 5.97311 6.5952 5.97311Z" fill="#00FE5E" stroke="#00FE5E" stroke-width="1.24315" stroke-miterlimit="10" />
                                        <path d="M2.86328 12.1878C2.86328 12.1878 3.48486 9.50817 4.72801 8.88659C5.97116 8.26502 7.21431 8.26502 8.45746 8.88659C9.70061 9.50817 10.3222 12.1878 10.3222 12.1878" fill="#00FE5E" />
                                        <path d="M2.86328 12.1878C2.86328 12.1878 3.48486 9.50817 4.72801 8.88659C5.97116 8.26502 7.21431 8.26502 8.45746 8.88659C9.70061 9.50817 10.3222 12.1878 10.3222 12.1878" stroke="#00FE5E" stroke-width="1.24315" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M28.3452 11.7671C29.3751 11.7671 30.2099 10.9322 30.2099 9.90232C30.2099 8.87246 29.3751 8.0376 28.3452 8.0376C27.3153 8.0376 26.4805 8.87246 26.4805 9.90232C26.4805 10.9322 27.3153 11.7671 28.3452 11.7671Z" fill="#00FE5E" stroke="#00FE5E" stroke-width="1.24315" stroke-miterlimit="10" />
                                        <path d="M24.6172 17.9847C24.6172 17.9847 25.2388 15.305 26.4819 14.6835C27.7251 14.0619 28.9682 14.0619 30.2114 14.6835C31.4545 15.305 32.0761 17.984 32.0761 17.984" fill="#00FE5E" />
                                        <path d="M24.6172 17.9847C24.6172 17.9847 25.2388 15.305 26.4819 14.6835C27.7251 14.0619 28.9682 14.0619 30.2114 14.6835C31.4545 15.305 32.0761 17.984 32.0761 17.984" stroke="#00FE5E" stroke-width="1.24315" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.1811 24.6245C13.211 24.6245 14.0459 23.7896 14.0459 22.7597C14.0459 21.7299 13.211 20.895 12.1811 20.895C11.1513 20.895 10.3164 21.7299 10.3164 22.7597C10.3164 23.7896 11.1513 24.6245 12.1811 24.6245Z" fill="#00FE5E" stroke="#00FE5E" stroke-width="1.24315" stroke-miterlimit="10" />
                                        <path d="M8.45456 30.8406C8.45456 30.8406 9.07613 28.161 10.3193 27.5394C11.5624 26.9178 12.8056 26.9178 14.0487 27.5394C15.2919 28.161 15.9135 30.84 15.9135 30.84M26.2061 6.05714C23.5837 2.96356 19.669 1 15.2962 1C13.5745 1 11.9248 1.30457 10.3964 1.86213M18.0517 29.3271C23.1567 28.3301 27.2895 24.6174 28.8839 19.7536L18.0517 29.3271ZM1.05408 14.0456C1.01802 14.4615 0.999973 14.8788 1 15.2962C1 20.2527 3.52235 24.6199 7.35375 27.1851" fill="#00FE5E" />
                                        <path d="M8.45456 30.8406C8.45456 30.8406 9.07613 28.161 10.3193 27.5394C11.5624 26.9178 12.8056 26.9178 14.0487 27.5394C15.2919 28.161 15.9135 30.84 15.9135 30.84M26.2061 6.05714C23.5837 2.96356 19.669 1 15.2962 1C13.5745 1 11.9248 1.30457 10.3964 1.86213M18.0517 29.3271C23.1567 28.3301 27.2895 24.6174 28.8839 19.7536M1.05408 14.0456C1.01802 14.4615 0.999973 14.8788 1 15.2962C1 20.2527 3.52235 24.6199 7.35375 27.1851" stroke="#00FE5E" stroke-width="1.24315" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h1 className='font-[400] leading-[28px] text-[23px] pl-4 text-[#00FE5E]'>Collaboration in Action</h1>
                                </div>
                                <p className='font-[400] leading-[28px] text-[20px] text-[#FFFFFF] my-6'>Through iterative design, feedback loops, and continuous improvement, we've created a sleek, user-friendly charging solution that captivates the market.</p>
                            </div>
                            <div className='flex flex-col my-8 w-[70%] w-fp'>
                                <div className='flex items-center'>
                                    <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.8571 10.4464C29.088 10.4449 30.2681 9.95524 31.1384 9.08487C32.0088 8.2145 32.4985 7.03446 32.5 5.80357V2.32143H29.0179C27.8294 2.32318 26.6875 2.78298 25.8294 3.60518C25.2281 2.51414 24.3453 1.60422 23.273 0.970168C22.2006 0.336113 20.9779 0.00109785 19.7321 0H16.25V3.48214C16.2521 5.32853 16.9866 7.09867 18.2922 8.40426C19.5978 9.70985 21.3679 10.4443 23.2143 10.4464H24.375V25.5357H10.4464V19.7321H11.6071C12.838 19.7306 14.0181 19.241 14.8884 18.3706C15.7588 17.5002 16.2485 16.3202 16.25 15.0893V11.6071H12.7679C11.5794 11.6089 10.4375 12.0687 9.57938 12.8909C8.97807 11.7999 8.09529 10.8899 7.02295 10.2559C5.95061 9.62183 4.72791 9.28681 3.48214 9.28571H0V12.7679C0.00215035 14.6142 0.736576 16.3844 2.04217 17.69C3.34776 18.9956 5.1179 19.73 6.96429 19.7321H8.125V25.5357H0V27.8571H32.5V25.5357H26.6964V10.4464H27.8571ZM26.6964 6.96429C26.697 6.34879 26.9418 5.75869 27.377 5.32347C27.8123 4.88825 28.4024 4.64347 29.0179 4.64286H30.1786V5.80357C30.178 6.41906 29.9332 7.00917 29.498 7.44439C29.0627 7.87961 28.4726 8.12438 27.8571 8.125H26.6964V6.96429ZM10.4464 16.25C10.447 15.6345 10.6918 15.0444 11.127 14.6092C11.5623 14.174 12.1524 13.9292 12.7679 13.9286H13.9286V15.0893C13.928 15.7048 13.6832 16.2949 13.248 16.7301C12.8127 17.1653 12.2226 17.4101 11.6071 17.4107H10.4464V16.25ZM8.125 17.4107H6.96429C5.73339 17.4092 4.55336 16.9195 3.68299 16.0492C2.81261 15.1788 2.32296 13.9987 2.32143 12.7679V11.6071H3.48214C4.71303 11.6087 5.89307 12.0983 6.76344 12.9687C7.63381 13.8391 8.12346 15.0191 8.125 16.25V17.4107ZM24.375 8.125H23.2143C21.9834 8.12346 20.8034 7.63381 19.933 6.76344C19.0626 5.89307 18.573 4.71303 18.5714 3.48214V2.32143H19.7321C20.963 2.32296 22.1431 2.81261 23.0134 3.68299C23.8838 4.55336 24.3735 5.73339 24.375 6.96429V8.125Z" fill="#00FE5E" />
                                    </svg>
                                    <h1 className='font-[400] leading-[28px] pl-4 text-[23px] text-[#00FE5E]'>Passionate Sustainability</h1>
                                </div>
                                <p className='font-[400] leading-[28px] text-[20px] text-[#FFFFFF] my-6'>Beyond expertise, our team is fueled by a deep passion for sustainability, setting new benchmarks for environmental responsibility in every product.</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center w-full h-full'>
                        {!submit ?
                            <form ref={formRef} className='flex flex-col border-[0.3px] border-[#00DD52] rounded-2xl p-9 w-[60%] w-fp bg-[#13131396]' onSubmit={() => setSubmit(true)}>
                                <span className='flex justify-end text-[#00DD52] cursor-pointer' onClick={() => setJoin(false)}>X</span>
                                <div className='mx-24 marg-x flex flex-col'>
                                    <label>Name</label>
                                    <input type='text' className=' bg-transparent outline-none border-[0.5px] px-5 py-3 border-[#00FE5E] rounded-2xl' required />
                                    <label>Email</label>
                                    <input type='email' className=' bg-transparent outline-none border-[0.5px] px-5 py-3 border-[#00FE5E] rounded-2xl' required />
                                </div>
                                <div className='flex flex-col items-center'>
                                    <input type='submit' value='Send' className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] transition border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] w-max mt-16' />
                                </div>
                            </form>
                            :
                            <div ref={abcRef} className='flex flex-col border-[0.3px] border-[#00DD52] rounded-2xl p-9 w-[60%] w-fp bg-[#13131396]'>
                                <span className='flex justify-end text-[#00DD52] cursor-pointer' onClick={() => { setJoin(false); setSubmit(false) }}>X</span>
                                <div className='mx-24 flex flex-col text-center'>
                                    <p className='font-[400] leading-[28px] text-[20px] text-[#00FE5E] my-6'>Request Submitted</p>
                                    <p className='font-[400] leading-[28px] text-[20px] text-[#FFFFFF] my-6'>Thank you for reaching out to us!
                                        This is to confirm that your request has been submitted successfully. Our team will review your inquiry and get back to you shortly.</p>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
    const Ninthp = () => {
        const abcRef = useRef(null);
        const defRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (abcRef.current && !abcRef.current.contains(event.target)) {
                    defRef.current.style.display = 'none';
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        return (
            <div className='font-[Satoshi] h-100'>
                <div className='flex flx-clmn'>
                    <div className='w-[50%] w-fp flex flex-col my-12 mx-12'>
                        <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E] my-6'>Get in touch</p>
                        <h1 className='font-bold leading-[61.2px] text-[51px] text-[#FFFFFF] my-6 w-[70%] w-fp'>We’d love to hear from you!</h1>
                        <p className='font-[500] leading-[24px] text-[20px] text-[#FFFFFF] my-6 w-[80%] w-fp'>Whether you have questions about our products, want to explore partnership opportunities, or simply want to chat about sustainable  mobility, we're here for you.</p>
                    </div>
                    <form className='flex flex-col p-9 w-[50%] w-fp' onSubmit={(e) => { e.preventDefault(); defRef.current.style.display = 'flex'; }}>
                        <div className='mx-6 flex flex-col'>
                            <div className='my-6 flex flex-col'>
                                <label>Name</label>
                                <input type='text' className=' bg-transparent outline-none border-[0.5px] px-5 py-3 border-[#00FE5E] rounded-2xl' required />
                            </div>
                            <div className='my-6 flex flex-col'>
                                <label>Email</label>
                                <input type='email' className=' bg-transparent outline-none border-[0.5px] px-5 py-3 border-[#00FE5E] rounded-2xl' required />
                            </div>
                            <div className='my-6 flex flex-col'>
                                <label>Subject</label>
                                <input type='text' className=' bg-transparent outline-none border-[0.5px] px-5 py-3 border-[#00FE5E] rounded-2xl' required />
                            </div>
                            <div className='my-6 flex flex-col'>
                                <label>Message</label>
                                <textarea rows={6} className=' bg-transparent outline-none border-[0.5px] px-5 py-3 border-[#00FE5E] rounded-2xl' required />
                            </div>
                            <input
                                type='submit'
                                value='Send'
                                className='font-[700] text-[20px] leading-[28px] cursor-pointer my-6 text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] w-max mt-16 transition duration-500 ease-in-out'
                            // style={{ transition: 'transform 3s, background-color 0.7s, color 0.7s' }}
                            />
                        </div>
                    </form>
                    <div ref={defRef} className='fixed top-0 left-0 hidden justify-center items-center w-full h-full bg-gray-900 bg-opacity-10'>
                        <div ref={abcRef} className='flex flex-col border-[0.3px] border-[#00DD52] rounded-2xl p-9 w-[60%] w-fp bg-[#13131396]' style={{ backdropFilter: 'blur(20px)' }}>
                            <span className='flex justify-end text-[#00DD52] cursor-pointer' onClick={() => defRef.current.style.display = 'none'}>X</span>
                            <div className='mx-24 flex flex-col text-center'>
                                <p className='font-[400] leading-[28px] text-[20px] text-[#00FE5E] my-6'>Request Submitted</p>
                                <p className='font-[400] leading-[28px] text-[20px] text-[#FFFFFF] my-6'>Thank you for reaching out to us! <br />
                                    This is to confirm that your request has been submitted successfully. Our team will review your inquiry and get back to you shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const Tenthp = () => {
        return (
            <div className='font-[Satoshi] text-center flex flex-col items-center justify-center h-100'>
                <div className='w-[50%] w-fp'>
                    <p className='font-[400] leading-[28px] text-[20px] text-[#00FE5E] my-6'>Join our team</p>
                    <h1 className='font-[700] leading-[61.2px] text-[51px] text-[#FFFFFF] my-6'>Explore Job Opportuinites</h1>
                    <p className='font-[500] leading-[28px] text-[20px] text-[#FFFFFF] my-6'>We are currently on the lookout for a dynamic professional to join our team This is your chance to be part of our company, contribute your unique skills, and grow with a company that values innovation and excellence.</p>
                    <button
                        className='font-[700] text-[20px] leading-[28px] cursor-pointer my-6 text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] w-max mt-16 transition duration-500 ease-in-out'
                    // style={{ transition: 'transform 3s, background-color 0.7s, color 0.7s' }}
                    >Apply Now</button>
                </div>
            </div>
        );
    }
    const Eleventhp = () => {
        return (
            <div className='font-[Satoshi] h-100'>
                <p className='font-[500] leading-[28px] text-[20px] text-[#00FE5E] text-center my-6'>Newsletter</p>
                <h1 className='font-[700] leading-[53.04px] text-[51px] text-[#FFFFFF] text-center my-6'>Join charged chatter </h1>
                <div className='flex flx-clmn justify-around mt-24'>
                    <div className='flex flex-col w-[20%] w-fp marg-x'>
                        <h3 className='font-[500] leading-[28px] text-[20px] text-[#00FE5E] my-6'>EcoMotion Showcase</h3>
                        <p className='font-[400] leading-[28px] text-[20px] text-[#D0D0D0] my-6'>Embark on a journey through the most exciting and innovative uses of electric vehicles across different industries. From electric delivery drones to autonomous EV shuttle services, we uncover unique applications that showcase the cutting-edge side of sustainability.</p>
                    </div>
                    <div className='flex flex-col w-[20%] w-fp marg-x'>
                        <h3 className='font-[500] leading-[28px] text-[20px] text-[#00FE5E] my-6'>EV’s Charged Adventures</h3>
                        <p className='font-[400] leading-[28px] text-[20px] text-[#D0D0D0] my-6'>Dive into the world of EVs with in-depth reviews, real-world usage insights, expert tidbits, and interactive features. Whether you're a seasoned EV enthusiast or just starting your journey, we've got something for everyone.</p>
                    </div>
                    <div className='flex flex-col w-[20%] w-fp marg-x'>
                        <h3 className='font-[500] leading-[28px] text-[20px] text-[#00FE5E] my-6'>New Industry Updates</h3>
                        <p className='font-[400] leading-[28px] text-[20px] text-[#D0D0D0] my-6'>Stay in the loop with the latest happenings in the electric mobility landscape. Our updates cover industry trends, breakthrough technologies, and noteworthy developments that shape the future of sustainable transportation.</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button
                        className='font-[700] text-[20px] leading-[28px] cursor-pointer my-6 text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] w-max mt-16 transition duration-500 ease-in-out'
                    // style={{ transition: 'transform 3s, background-color 0.7s, color 0.7s' }}
                    >Subscribe Now</button>
                </div>
            </div>
        );
    }
    const Twelthp = () => {
        return (
            <div className='font-[Satoshi]'>
                <div className='flex justify-around'>
                    <div className='flex items-center px-6'>
                        <img src={Logo} alt='' className='h-[34.73px] w-auto' />
                        <div className='flex pl-3'>
                            <span>Recharga Chargine</span>
                        </div>
                    </div>
                    <div className='flex justify-evenly w-[70%] mx-24 marg-x w-fp'>
                        <button className='mx-4 text-[#00FE5E]'>About Us</button>
                        <button className='mx-4 text-[#00FE5E]'>Product</button>
                        <button className='mx-4 text-[#00FE5E]'>Invest </button>
                        <button className='mx-4 text-[#00FE5E]'>Careers</button>
                        <button className='mx-4 text-[#00FE5E]'>Contact Us</button>
                    </div>
                </div>
                <div className='flex flx-clmn justify-around text-c'>
                    <div className='p-12'>
                        <h1 className='font-[800] leading-[20px] text-[26px] text-[#D0D0D0] my-6'>RECHARGA CHARGINE PRIVATE LIMITED</h1>
                        <p className='font-[400] leading-[20px] text-[20px] text-[#D0D0D0] my-6'>REGISTERED OFFICE: 130 E, SHRI GOPAL NAGAR, DURGAPURA, JAIPUR RJ 302018 IN</p>
                        <div className='flex items-center'>
                            <p className='font-[400] leading-[20px] text-[16px] text-[#D0D0D0] my-6'>E-Mail:sehej.siddhant@gmail.com</p>
                            <p className='font-[400] leading-[20px] text-[16px] text-[#D0D0D0] my-6'>Mobile No. : 09322107991 </p>
                        </div>
                        <p className='font-[400] leading-[20px] text-[20px] text-[#D0D0D0] my-6'>CIN: U29304RJ2023PTC086778</p>
                    </div>
                    <div className='flex flex-col p-12'>
                        <p className='font-[400] leading-[20px] text-[16px] text-[#D0D0D0] my-6'>+919322107991</p>
                        <p className='font-[400] leading-[20px] text-[16px] text-[#D0D0D0] my-6'>sehej.sharma@rechargachargine.in</p>
                        <div className='flex justi-c'>
                            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_228_2608)">
                                    <circle cx="25.9375" cy="21.375" r="21.375" fill="black" fill-opacity="0.3" shape-rendering="crispEdges" />
                                    <circle cx="25.9375" cy="21.375" r="20.875" stroke="#181818" shape-rendering="crispEdges" />
                                </g>
                                <path d="M34.8753 10.5625H16.1818C15.2892 10.5625 14.5625 11.2707 14.5625 12.1427V30.9157C14.5625 31.7898 15.2892 32.4993 16.1818 32.4993H34.8766C35.7713 32.4993 36.5 31.7898 36.5 30.9157V12.1427C36.5 11.2707 35.7713 10.5625 34.8753 10.5625Z" fill="white" />
                                <path d="M17.8145 18.7863H21.0743V29.2546H17.8145V18.7863ZM19.442 13.5762C20.482 13.5762 21.3273 14.4215 21.3273 15.4614C21.3273 16.5014 20.482 17.3487 19.4427 17.3487C18.9424 17.3477 18.4629 17.1485 18.1091 16.7948C17.7553 16.4411 17.556 15.9617 17.5547 15.4614C17.5547 15.2137 17.6035 14.9684 17.6984 14.7395C17.7933 14.5106 17.9323 14.3027 18.1076 14.1276C18.2829 13.9525 18.4909 13.8137 18.7199 13.7191C18.9489 13.6245 19.1942 13.5759 19.442 13.5762ZM23.1097 18.7863H26.2303V20.2171H26.2735C26.7081 19.3944 27.7693 18.5265 29.3584 18.5265C32.6532 18.5265 33.2613 20.6949 33.2613 23.5132V29.2553H30.0097V24.1631C30.0097 22.9497 29.9878 21.3866 28.3191 21.3866C26.6258 21.3866 26.3653 22.7097 26.3653 24.074V29.2526H23.1145V18.7843L23.1097 18.7863Z" fill="black" />
                                <defs>
                                    <filter id="filter0_d_228_2608" x="0.5625" y="0" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_2608" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_2608" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_228_2613)">
                                    <circle cx="25.375" cy="21.375" r="21.375" fill="black" fill-opacity="0.3" shape-rendering="crispEdges" />
                                    <circle cx="25.375" cy="21.375" r="20.875" stroke="#181818" shape-rendering="crispEdges" />
                                </g>
                                <path d="M36.1461 15.9083C36.0199 15.443 35.7742 15.0189 35.4333 14.678C35.0924 14.3371 34.6682 14.0913 34.203 13.9651C32.4994 13.5 25.6425 13.5 25.6425 13.5C25.6425 13.5 18.7854 13.5137 17.0814 13.9789C16.6161 14.1051 16.192 14.3508 15.8511 14.6917C15.5102 15.0326 15.2644 15.4568 15.1382 15.922C14.6875 17.626 14.6875 21.1884 14.6875 21.1884C14.6875 21.1884 14.6875 24.7509 15.1523 26.4685C15.2785 26.9338 15.5243 27.3579 15.8652 27.6988C16.206 28.0397 16.6302 28.2855 17.0955 28.4117C18.7991 28.8768 25.6562 28.8768 25.6562 28.8768C25.6562 28.8768 32.5134 28.8768 34.2174 28.412C34.6826 28.2858 35.1068 28.0401 35.4477 27.6992C35.7886 27.3583 36.0343 26.9341 36.1605 26.4688C36.625 24.7649 36.625 21.1884 36.625 21.1884C36.625 21.1884 36.6113 17.626 36.1461 15.9083Z" fill="white" />
                                <path d="M23.4613 24.4825L29.1496 21.1878L23.4609 17.8931L23.4613 24.4825Z" fill="black" />
                                <defs>
                                    <filter id="filter0_d_228_2613" x="0" y="0" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_2613" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_2613" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_228_2618)">
                                    <circle cx="25.375" cy="21.375" r="21.375" fill="black" fill-opacity="0.3" shape-rendering="crispEdges" />
                                    <circle cx="25.375" cy="21.375" r="20.875" stroke="#181818" shape-rendering="crispEdges" />
                                </g>
                                <path d="M25.6649 16.0474C25.4719 16.0474 25.2811 16.0573 25.0931 16.0765C24.9051 16.0958 24.7197 16.1243 24.5375 16.1618C24.3553 16.1992 24.1763 16.2456 24.0008 16.3004L23.486 16.4894L22.9958 16.7261L22.5332 17.0076L22.101 17.3309L21.7021 17.6932L21.3395 18.0917L21.0158 18.5234L20.734 18.9856L20.4972 19.4752C20.426 19.6427 20.3627 19.8144 20.3078 19.9897C20.253 20.1649 20.2066 20.3439 20.1691 20.5259C20.1316 20.7079 20.103 20.8931 20.0837 21.081C20.0644 21.2688 20.0547 21.4594 20.0547 21.6521C20.0547 21.8448 20.0645 22.0354 20.0837 22.2233C20.1028 22.4097 20.1313 22.5949 20.1691 22.7784C20.2066 22.9612 20.253 23.1394 20.3078 23.3147C20.3627 23.49 20.4259 23.6616 20.4972 23.8291L20.734 24.3188L21.0158 24.7809L21.3395 25.2127L21.7021 25.6111L22.101 25.9734L22.5332 26.2967L22.9958 26.5782L23.486 26.8149L24.0008 27.004L24.5375 27.1425C24.7212 27.1803 24.9066 27.2088 25.0931 27.2279C25.2831 27.2472 25.4739 27.2569 25.6649 27.2569C25.8578 27.2569 26.0486 27.2471 26.2365 27.2279C26.4231 27.2088 26.6085 27.1803 26.7922 27.1425L27.3289 27.004L27.8438 26.8149L28.3339 26.5782L28.7965 26.2967L29.2288 25.9734L29.6277 25.6111L29.9903 25.2127L30.314 24.7809L30.5958 24.3188L30.8326 23.8291L31.022 23.3147C31.0768 23.1394 31.1232 22.9605 31.1607 22.7784L31.2461 22.2232C31.2653 22.0354 31.2752 21.8448 31.2752 21.6521C31.2752 21.4594 31.2653 21.2688 31.2461 21.0809C31.227 20.8945 31.1985 20.7093 31.1607 20.5258C31.1232 20.3431 31.0768 20.1649 31.022 19.9896L30.8326 19.4751L30.5958 18.9855L30.314 18.5233L29.9903 18.0916L29.6277 17.6931L29.2288 17.3308L28.7965 17.0075L28.3339 16.7261L27.8438 16.4894L27.3289 16.3003L26.7922 16.1617L26.2365 16.0765C26.0466 16.0571 25.8558 16.0473 25.6649 16.0474V16.0474ZM25.6649 17.982C25.7924 17.982 25.9183 17.9883 26.0423 18.0008L26.4077 18.0561L26.7607 18.1461L27.0988 18.2688L27.4202 18.4228L27.7224 18.6058L28.0049 18.8165L28.2654 19.0527L28.5019 19.3129L28.7127 19.5952L28.896 19.8978L29.0499 20.219C29.0961 20.3289 29.1372 20.4416 29.1729 20.5567C29.2086 20.6719 29.2386 20.7897 29.2629 20.9095C29.2871 21.0294 29.305 21.1515 29.3182 21.2754L29.337 21.6525C29.337 21.7799 29.3307 21.9057 29.3182 22.0297C29.3057 22.1536 29.2872 22.2757 29.2629 22.3955C29.2385 22.5153 29.2084 22.633 29.1729 22.7483L29.0499 23.0861L28.896 23.4072L28.7127 23.7098L28.5019 23.9921L28.2654 24.2523L28.0049 24.4886L27.7224 24.6992L27.4202 24.8823L27.0988 25.0362L26.7607 25.159L26.4077 25.2489L26.0423 25.3042C25.9168 25.3167 25.7909 25.323 25.6648 25.323C25.5387 25.323 25.4127 25.3167 25.2872 25.3042L24.9218 25.2489C24.8018 25.2246 24.684 25.1945 24.5687 25.159L24.2307 25.0362L23.9093 24.8823L23.6071 24.6992L23.3245 24.4886L23.0641 24.2523L22.8276 23.9921L22.6167 23.7098L22.4335 23.4072L22.2795 23.0861L22.1566 22.7483L22.0666 22.3955L22.0113 22.0297C21.9987 21.9043 21.9924 21.7784 21.9924 21.6525C21.9924 21.5265 21.9987 21.4007 22.0113 21.2754C22.0237 21.1515 22.0422 21.0294 22.0666 20.9095C22.0907 20.7906 22.1208 20.6728 22.1566 20.5568L22.2796 20.219L22.4335 19.8979L22.6168 19.5952L22.8277 19.313L23.0642 19.0528L23.3246 18.8165L23.6071 18.6059L23.9093 18.4228L24.2307 18.2689C24.3413 18.2225 24.4542 18.1815 24.5688 18.1461L24.9219 18.0562C25.0419 18.0319 25.164 18.0133 25.2874 18.0009C25.4128 17.9883 25.5389 17.982 25.6649 17.982L25.6649 17.982Z" fill="white" />
                                <path d="M31.504 14.4536C31.4594 14.4536 31.4149 14.4559 31.3706 14.4604C31.3263 14.4648 31.2822 14.4715 31.2385 14.4805C31.1949 14.4894 31.1517 14.5005 31.1092 14.5137C31.0666 14.527 31.0247 14.5423 30.9837 14.5598C30.9427 14.5773 30.9025 14.5968 30.8635 14.6183C30.8244 14.6398 30.7864 14.6633 30.7496 14.6886C30.7128 14.7139 30.6773 14.741 30.6433 14.7699C30.6092 14.7988 30.5766 14.8294 30.5456 14.8615C30.5146 14.8937 30.4851 14.9274 30.4575 14.9625C30.4298 14.9976 30.4039 15.0341 30.3798 15.0719C30.3557 15.1096 30.3336 15.1485 30.3134 15.1884C30.2932 15.2284 30.2749 15.2693 30.2588 15.3111C30.2426 15.3529 30.2286 15.3955 30.2167 15.4387C30.2048 15.4819 30.195 15.5256 30.1874 15.5698C30.1799 15.614 30.1745 15.6585 30.1713 15.7032C30.1691 15.7349 30.168 15.7666 30.168 15.7984C30.168 15.8432 30.1702 15.888 30.1746 15.9327C30.1791 15.9773 30.1858 16.0216 30.1946 16.0656C30.2035 16.1095 30.2145 16.153 30.2276 16.1958C30.2408 16.2386 30.2561 16.2808 30.2735 16.3221C30.2908 16.3634 30.3102 16.4038 30.3316 16.4432C30.3529 16.4825 30.3762 16.5208 30.4014 16.5578C30.4265 16.5948 30.4535 16.6305 30.4822 16.6648C30.5109 16.6991 30.5413 16.7319 30.5732 16.7632C30.6052 16.7944 30.6387 16.824 30.6736 16.8519C30.7085 16.8797 30.7447 16.9058 30.7822 16.9301C30.8197 16.9543 30.8584 16.9766 30.8981 16.997C30.9378 17.0173 30.9785 17.0357 31.02 17.0519C31.0615 17.0682 31.1038 17.0823 31.1467 17.0943C31.1896 17.1063 31.2331 17.1161 31.277 17.1237C31.3209 17.1313 31.3651 17.1367 31.4095 17.1399C31.441 17.1422 31.4725 17.1433 31.5041 17.1433C31.5486 17.1433 31.5931 17.1411 31.6375 17.1366C31.6818 17.1321 31.7259 17.1254 31.7695 17.1165C31.8132 17.1076 31.8563 17.0965 31.8989 17.0833C31.9415 17.07 31.9833 17.0546 32.0243 17.0372C32.0654 17.0197 32.1055 17.0002 32.1446 16.9787C32.1837 16.9572 32.2217 16.9337 32.2584 16.9084C32.2952 16.8831 32.3307 16.856 32.3648 16.8271C32.3988 16.7982 32.4314 16.7676 32.4625 16.7355C32.4935 16.7033 32.5229 16.6696 32.5506 16.6345C32.5783 16.5993 32.6042 16.5629 32.6283 16.5251C32.6523 16.4874 32.6745 16.4485 32.6947 16.4085C32.7149 16.3686 32.7331 16.3276 32.7493 16.2858C32.7654 16.244 32.7795 16.2015 32.7914 16.1583C32.8033 16.1151 32.8131 16.0713 32.8206 16.0271C32.8282 15.9829 32.8336 15.9384 32.8367 15.8937C32.839 15.8621 32.8401 15.8303 32.8401 15.7986C32.8401 15.7537 32.8379 15.7089 32.8334 15.6643C32.829 15.6197 32.8223 15.5754 32.8135 15.5314C32.8046 15.4875 32.7936 15.444 32.7804 15.4012C32.7672 15.3584 32.752 15.3162 32.7346 15.2749C32.7172 15.2336 32.6978 15.1932 32.6765 15.1538C32.6551 15.1145 32.6318 15.0762 32.6067 15.0392C32.5815 15.0022 32.5545 14.9664 32.5258 14.9322C32.4971 14.8978 32.4668 14.865 32.4349 14.8338C32.4029 14.8025 32.3694 14.7729 32.3345 14.7451C32.2996 14.7172 32.2633 14.6911 32.2258 14.6669C32.1883 14.6427 32.1497 14.6203 32.1099 14.6C32.0703 14.5797 32.0296 14.5613 31.9881 14.545C31.9466 14.5288 31.9043 14.5147 31.8614 14.5027C31.8184 14.4907 31.775 14.4808 31.7311 14.4732C31.6872 14.4656 31.6429 14.4602 31.5985 14.4571C31.5671 14.4548 31.5355 14.4537 31.504 14.4537V14.4536Z" fill="white" />
                                <path d="M24.602 10.6877C23.9918 10.6867 23.4473 10.6893 22.9581 10.6961L21.6467 10.7313C21.2582 10.7481 20.9149 10.7701 20.6068 10.7986C20.4528 10.8128 20.3074 10.8287 20.1697 10.8462C20.0386 10.8627 19.9079 10.8819 19.7776 10.9039C19.6536 10.925 19.5358 10.9477 19.423 10.9725C19.3101 10.9972 19.2023 11.0239 19.0983 11.0526C18.9966 11.0806 18.8957 11.1115 18.7957 11.1451C18.6978 11.1781 18.6022 11.2131 18.5078 11.2505C18.319 11.3253 18.1349 11.4092 17.9453 11.5032C17.7994 11.5756 17.6646 11.6489 17.5365 11.7265C17.4085 11.8041 17.2872 11.886 17.1684 11.9753C17.0461 12.0677 16.9282 12.1658 16.8151 12.2692C16.6969 12.3769 16.5761 12.4953 16.4507 12.6276C16.293 12.793 16.1561 12.9472 16.0345 13.0985C15.9737 13.1741 15.9168 13.2489 15.8631 13.3241C15.8101 13.3982 15.7594 13.474 15.7111 13.5513C15.6633 13.6279 15.6181 13.7059 15.5748 13.7861C15.5308 13.8678 15.4893 13.9507 15.4502 14.0348C15.3702 14.2066 15.2956 14.3915 15.2211 14.598C15.1658 14.7507 15.1163 14.9053 15.0727 15.0617C15.0282 15.2215 14.9887 15.3887 14.9534 15.5696C14.9181 15.7504 14.8873 15.9449 14.8602 16.1599C14.8311 16.3957 14.8078 16.6321 14.7904 16.869C14.7707 17.1294 14.7544 17.416 14.7411 17.735L14.7094 18.7957L14.6924 20.0886L14.6875 21.6515L14.7019 23.9241L14.7469 25.646L14.7815 26.3186L14.8248 26.8759C14.8387 27.0261 14.8561 27.176 14.8769 27.3254C14.8959 27.4581 14.9163 27.5742 14.9382 27.6747C14.9827 27.879 15.0353 28.0815 15.0959 28.2816C15.1539 28.4732 15.2203 28.6622 15.2948 28.8481C15.368 29.0301 15.4481 29.2057 15.5353 29.3746C15.6224 29.5436 15.7166 29.7059 15.8178 29.8619C15.919 30.0178 16.0272 30.1674 16.1428 30.3105C16.2582 30.4537 16.381 30.5908 16.5106 30.7213C16.6404 30.852 16.7773 30.9764 16.9216 31.0946C17.0676 31.2141 17.2193 31.3265 17.3763 31.4312C17.522 31.5286 17.6661 31.6178 17.8113 31.6997C17.9565 31.7816 18.103 31.8559 18.2535 31.9234C18.4041 31.9909 18.5584 32.0517 18.7196 32.1064C18.8808 32.1611 19.0488 32.2097 19.2263 32.2529C19.4039 32.296 19.5918 32.3339 19.7907 32.3669C19.9896 32.4 20.2022 32.4283 20.4293 32.4527C20.6565 32.4771 20.8988 32.4972 21.1592 32.5141C21.4196 32.531 21.6979 32.5445 21.9969 32.5553C22.4589 32.572 23.1581 32.5818 23.9645 32.5855L26.5751 32.5802L29.0471 32.5456L29.987 32.5192L30.5994 32.4877C30.7308 32.477 30.8594 32.4643 30.9835 32.4495C31.1077 32.4347 31.2301 32.4177 31.3493 32.3985C31.4685 32.3792 31.585 32.3577 31.6995 32.3338C31.8127 32.3103 31.9252 32.2839 32.0371 32.2549C32.1479 32.2268 32.2571 32.1948 32.3652 32.1609C32.4733 32.1269 32.5802 32.0902 32.6866 32.0509C32.7935 32.0113 32.8995 31.9691 33.0044 31.9243C33.11 31.8793 33.2155 31.8313 33.3213 31.7802C33.4839 31.7019 33.6148 31.6366 33.7297 31.5729C33.8378 31.5136 33.9419 31.4473 34.0413 31.3744C34.1394 31.3022 34.237 31.22 34.3494 31.1164C34.4618 31.0128 34.5893 30.888 34.747 30.7301C34.8857 30.5915 35.0027 30.4711 35.1035 30.3615C35.2044 30.2519 35.2893 30.1533 35.3638 30.0583C35.4348 29.9681 35.501 29.8742 35.562 29.777C35.6215 29.6822 35.6764 29.5836 35.7322 29.4743C35.8163 29.3099 35.8911 29.1576 35.958 29.0106C36.0231 28.869 36.0825 28.7249 36.1361 28.5786C36.189 28.4334 36.2347 28.2857 36.2733 28.1361C36.3129 27.9822 36.347 27.8197 36.3766 27.6415C36.4061 27.4633 36.431 27.2693 36.4527 27.0527C36.4743 26.8361 36.4927 26.5967 36.5089 26.3278L36.5518 25.4249L36.5886 24.302L36.6149 23.051L36.625 21.743L36.6015 19.1739L36.5701 18.0232L36.5272 17.0352L36.4738 16.2649C36.4544 16.0506 36.4335 15.8818 36.4113 15.7676C36.3867 15.6415 36.3592 15.516 36.3289 15.3911C36.2994 15.2696 36.2669 15.1489 36.2316 15.029C36.1971 14.9121 36.1597 14.7962 36.1193 14.6813C36.0793 14.5678 36.037 14.4567 35.9928 14.348C35.9485 14.2392 35.9006 14.133 35.8507 14.0291C35.8008 13.9252 35.7485 13.8237 35.6936 13.7246C35.6387 13.6256 35.5815 13.5289 35.5217 13.4347C35.4619 13.3404 35.3996 13.2486 35.3347 13.1592C35.2702 13.0701 35.203 12.983 35.133 12.8981C35.0634 12.8136 34.9912 12.7314 34.9164 12.6515C34.8417 12.5718 34.7646 12.4944 34.685 12.4195C34.6054 12.3446 34.5233 12.272 34.4387 12.2019C34.3538 12.1315 34.2667 12.0638 34.1776 11.9988C34.0875 11.9332 33.9954 11.8704 33.9015 11.8104C33.8063 11.7495 33.7093 11.6915 33.6107 11.6363C33.5103 11.5803 33.4084 11.5271 33.305 11.4769C33.1333 11.3935 32.9747 11.3195 32.8188 11.2539C32.6657 11.1887 32.5095 11.1309 32.3509 11.0805C32.1914 11.0302 32.0253 10.9872 31.8426 10.95C31.6599 10.9128 31.4606 10.8818 31.2351 10.8555C31.0096 10.8291 30.7577 10.8078 30.4697 10.7901C30.1817 10.7724 29.8578 10.7585 29.4879 10.7472L28.2309 10.7191L26.64 10.7004L24.6027 10.6878L24.602 10.6877ZM25.66 12.6205L28.598 12.6373L29.7063 12.6586C30.0115 12.6672 30.2444 12.6773 30.381 12.6889C30.5588 12.7038 30.7282 12.7226 30.8901 12.7451C31.0456 12.7666 31.2003 12.7932 31.354 12.8251C31.5016 12.8561 31.6424 12.8912 31.7771 12.9308C31.9118 12.9705 32.0405 13.0149 32.164 13.064C32.2875 13.1131 32.4055 13.1672 32.5192 13.2264C32.6319 13.2851 32.7415 13.3497 32.8474 13.42C32.9528 13.4899 33.0544 13.5653 33.1531 13.6464C33.2518 13.7276 33.3474 13.8146 33.4408 13.9077C33.5394 14.0058 33.6304 14.1058 33.7142 14.209C33.7977 14.3115 33.875 14.419 33.9456 14.5308C34.0171 14.6442 34.0814 14.7619 34.1384 14.8833C34.1965 15.007 34.2488 15.1377 34.2958 15.2766C34.3427 15.4156 34.3845 15.5632 34.4216 15.721C34.4604 15.8883 34.4929 16.057 34.519 16.2267C34.5471 16.4066 34.5711 16.5985 34.5915 16.8039C34.6119 17.0093 34.6288 17.2284 34.6427 17.4628C34.6538 17.6508 34.6635 17.8989 34.6717 18.1919L34.6923 19.1909L34.708 21.638L34.6901 24.0829L34.6686 25.079L34.639 25.8035C34.6185 26.1428 34.5969 26.428 34.571 26.6762C34.558 26.8003 34.5439 26.9152 34.5283 27.0229C34.5137 27.1247 34.4964 27.2261 34.4764 27.3269C34.4581 27.419 34.4369 27.5104 34.4128 27.601C34.3897 27.6875 34.3637 27.7733 34.3349 27.858C34.3058 27.9432 34.2742 28.0275 34.24 28.1108C34.204 28.1987 34.1659 28.2858 34.1258 28.372C34.0902 28.449 34.0527 28.5238 34.0131 28.5967C33.9739 28.6688 33.9323 28.7396 33.8883 28.8089C33.8447 28.8776 33.799 28.9443 33.7512 29.0089C33.7037 29.0733 33.6539 29.1359 33.6018 29.1967C33.5499 29.2572 33.4959 29.3158 33.4397 29.3724C33.3835 29.4289 33.3251 29.4835 33.2647 29.5363C33.2043 29.589 33.1416 29.6396 33.0767 29.6883C33.0118 29.7371 32.9447 29.7839 32.8753 29.8288C32.806 29.8736 32.7344 29.9166 32.6606 29.9577C32.5867 29.9987 32.5105 30.0379 32.4322 30.0752C32.3524 30.1131 32.2716 30.1486 32.1898 30.1816C32.1052 30.2158 32.0196 30.2475 31.9332 30.2769C31.7575 30.3367 31.5722 30.3893 31.3771 30.4346C31.1738 30.4816 30.9686 30.52 30.762 30.5498C30.6826 30.5614 30.5001 30.5723 30.2387 30.5824L29.2424 30.6101L26.4178 30.6468L23.4614 30.6514L22.3004 30.639L21.5465 30.6155L20.9906 30.5765C20.818 30.5619 20.6574 30.5458 20.507 30.5274C20.3566 30.5091 20.2166 30.4886 20.0848 30.4656C19.9599 30.444 19.8358 30.4182 19.7127 30.3883C19.6004 30.3609 19.4892 30.3291 19.3795 30.2928C19.2738 30.2577 19.1726 30.219 19.0742 30.1765C18.9758 30.134 18.8803 30.0874 18.7856 30.0365C18.6909 29.9856 18.5973 29.9304 18.5025 29.8702C18.431 29.8248 18.362 29.7788 18.2955 29.7301C18.229 29.6814 18.1647 29.6328 18.1029 29.5819C18.0411 29.5311 17.9817 29.4786 17.9244 29.4247C17.8675 29.3709 17.8125 29.3152 17.7597 29.2575C17.7069 29.2 17.6566 29.1409 17.6082 29.0796C17.5597 29.0181 17.5134 28.9548 17.4695 28.8898C17.425 28.8239 17.3829 28.7564 17.3432 28.6874C17.3032 28.6178 17.2651 28.5459 17.2289 28.4717C17.1921 28.396 17.1578 28.3192 17.1259 28.2413C17.0936 28.1621 17.063 28.0803 17.0342 27.9958C16.9765 27.8268 16.9259 27.6468 16.8819 27.455C16.8379 27.2631 16.8004 27.0593 16.7686 26.8421C16.7369 26.625 16.7113 26.3947 16.6909 26.15C16.6759 25.9698 16.6639 25.689 16.6548 25.3348L16.6357 24.075L16.6427 20.8636L16.698 17.7948L16.7402 16.7137L16.7641 16.3563C16.7724 16.2608 16.7809 16.1901 16.7897 16.1477C16.8187 16.008 16.8478 15.8781 16.878 15.7564C16.9062 15.6417 16.9375 15.5277 16.972 15.4147C17.0047 15.308 17.0392 15.208 17.0761 15.1134C17.1117 15.0217 17.1513 14.9316 17.195 14.8434C17.2375 14.7577 17.2833 14.6756 17.333 14.5957C17.3827 14.5158 17.4363 14.4383 17.4948 14.3612C17.5532 14.2841 17.6162 14.208 17.6847 14.1308C17.7533 14.0536 17.8273 13.9757 17.9075 13.8954C18.0011 13.8013 18.0985 13.7111 18.1995 13.6251C18.2948 13.544 18.3943 13.4678 18.4975 13.3968C18.5989 13.3265 18.7029 13.264 18.8112 13.2065C18.9195 13.149 19.0321 13.097 19.1505 13.0503C19.2689 13.0036 19.3933 12.9618 19.5251 12.9238C19.6635 12.885 19.8035 12.8518 19.9447 12.8245C20.0931 12.7954 20.2507 12.77 20.4191 12.7479C20.5874 12.7258 20.7664 12.7066 20.9579 12.6901C21.0914 12.6785 21.3215 12.6683 21.6245 12.6596L22.7272 12.6378L25.6605 12.6199L25.66 12.6205Z" fill="white" />
                                <defs>
                                    <filter id="filter0_d_228_2618" x="0" y="0" width="50.75" height="50.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_2618" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_2618" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
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
            <Ninthp />
            <Tenthp />
            <Eleventhp />
            <Twelthp />
        </div>
    )
}

export default MainPage