import React from 'react'
import Peoples from '../../assets/peoples.svg'

const SixthPage = ({ isWindow }) => {
    return (
        <div className='p-12 red-pad-2 flex flex-col justify-end font-[Satoshi] leading-10 h-100'>
            <div className='flex flx-clmn justify-between mx-24 my-24 marg-x'>
                <div className='flex flex-col w-[50%] w-fw mr'>
                    <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Recharga Team</p>
                    <h1 className='font-bold leading-[53.04px] text-[51px] red-fonsiz mt-6'>We are crafting the future of charging</h1>
                </div>
                <img src={Peoples} alt='' />
            </div>
            {isWindow ?
                <div className='flex flx-clmn justify-between mx-24 marg-x'>
                    <div className='w-[20%] w-fw mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="150">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Research Prowess</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Leading in charging technology, we stay ahead by researching the latest in tech, user experience, and sustainability.</p>
                    </div>
                    <div className='w-[20%] w-fw mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="350">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Dynamic Collaboration</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Our diverse team of engineers, designers, and sustainability enthusiasts collaborates seamlessly to ensure excellence in every aspect.</p>
                    </div>
                    <div className='w-[20%] w-fw mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="550">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Iterative Design</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Through constant feedback loops and continuous improvement, we've shaped a sleek, user-friendly charging solution.</p>
                    </div>
                    <div className='w-[20%] w-fw mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="950">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Passionate Sustainability</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Beyond expertise, our team's deep passion for sustainability fuels our drive to set new benchmarks for environmental responsibility in every product we create.</p>
                    </div>
                </div>
                :
                <div className='flex flx-clmn justify-between mx-24 marg-x' data-aos="fade-up" data-aos-duration="200" data-aos-delay="950">
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
            }
        </div>
    );
}

export default SixthPage