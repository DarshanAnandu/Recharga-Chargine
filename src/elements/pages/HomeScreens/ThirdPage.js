import React, { useState } from 'react'
import Car2 from '../../assets/car2.svg'

const ThirdPage = () => {
    const [learn, setLearn] = useState(true)
    return (
        <div className='flex justify-end h-100' onMouseLeave={() => setLearn(true)}>
            {learn ?
                <div className='flex justify-between flx-clmn'>
                    <div className='flex items-end'>
                        <img src={Car2} alt='' data-aos='fade-up-right' data-aos-offset='0' data-aos-delay='20' className='max-w-full h-auto' />
                    </div>
                    <div className='w-[30%] flex flex-col items-start p-6 w-fp'>
                        <p className='text-[#00DD52] font-normal leading-[24px] text-[20px] mt-[10%]'>Our Product</p>
                        <h1 className='font-bold leading-[61.2px] text-[51px] red-fonsiz mt-16'>Charge as you drive</h1>
                        <p className='font-normal leading-[26px] text-[20px] mt-16'>Experience seamless and enjoyable electric vehicle charging with our state-of-the-art machine. Harnessing kinetic energy, it charges efficiently on the go.</p>
                        <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                    </div>
                </div>
                :
                <div className='p-24 red-pad' data-aos='fade-right' data-aos-offset='0' data-aos-anchor-placement="top-center" data-aos-delay='20'>
                    {/* <h2 className='font-[500] text-[20px] text-[#00DD52] leading-[24px]'>Recharga Chargine</h2> */}
                    <span className='flex justify-end text-[red] text-[51px] red-fonsiz cursor-pointer' onClick={() => setLearn(true)}>X</span>
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

export default ThirdPage