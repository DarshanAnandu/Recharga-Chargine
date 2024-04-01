import React, { useState } from 'react'
import Bg from '../../assets/bg_3.svg'
import Bg2 from '../../assets/bg_4.svg'
import Car from '../../assets/car.svg'

const FirstPage = () => {
    const [learn, setLearn] = useState(true)
    return (
        <div onMouseLeave={() => setLearn(true)}>
            {learn ?
                <div className='w-full' style={{ height: `calc(100vh - ${'108px'})`, backgroundImage: `url(${Bg})`, backgroundSize: 'cover' }}>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-[52px] red-fonsiz text-[#F5F5F5] w-[60%] w-fp font-bold leading-[54.02px] my-12 mt-24'>Powered by your car for your car</h2>
                        <p className='w-[30%] text-[20px] w-fp text-[#FFFFFF] font-normal leading-[26px]'>Imagine a world where charging your electric vehicle is not just a necessity but a seamless and enjoyable experience. Our product, a state-of-the-art charging machine, is designed to make this vision a reality. </p>
                        <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setLearn(false)}>Learn More</button>
                        <img src={Car} alt='' data-aos='fade-up' data-aos-offset='100' data-aos-delay='20' className='h-auto w-[50%] mt-12' />
                    </div>
                </div>
                :
                <div className='w-full h-100' style={{ backgroundImage: `url(${Bg2})`, animation: 'slideBackground 5s 5', backgroundSize: 'cover' }}>
                    <div className='p-24 kd' data-aos='fade-right' data-aos-offset='0' data-aos-delay='20'>
                        <span className='flex justify-end text-[red] text-[51px] red-fonsiz cursor-pointer' onClick={() => setLearn(true)}>X</span>
                        <h2 className='font-[500] text-[20px] text-[#00DD52] leading-[24px]'>Recharga Chargine</h2>
                        <p className='w-[60%] w-fp leading font-normal text-[20px] leading-[38px]'>Recharga Chargine may address other pain points in the EV ecosystem, such as range anxiety, charging infrastructure limitations, and the environmental impact of battery production and disposal. <br />
                            Through comprehensive solutions encompassing energy management, infrastructure development, and environmental stewardship, Recharga Chargine aims to accelerate the transition to a more sustainable transportation paradigm. <br /> <br />

                            The pain point addressed by Recharga Chargine revolves around the sustainability of electric vehicles (EVs). <br />
                            While EVs offer a promising solution to reduce greenhouse gas emissions and dependence on fossil fuels, they are not entirely "green" due to the energy sources powering them. <br />

                            The majority of electricity still comes from conventional grids, which may rely on non-renewable sources like coal or natural gas. This dependency introduces carbon emissions and environmental concerns associated with conventional energy production methods.
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}

export default FirstPage
