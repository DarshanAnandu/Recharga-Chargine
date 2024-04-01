import React, { useState, useEffect } from 'react'

const FifthPage = ({ isWindow }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const animateElement = document.querySelector('.animate-watch2');
        observer.observe(animateElement);

        return () => {
            observer.unobserve(animateElement);
        };
    }, []);
    return (
        <div className={`p-12 flex flex-col justify-around font-[Satoshi] leading-10 h-100 animate-watch2 ${animate ? 'animate2' : ''}`}>
            <div className='flex justify-end z-10'>
                <div className='flex flex-col w-[50%] w-fp '>
                    <p className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>About Us</p>
                    <h1 className='font-bold leading-[53.04px] text-[51px] red-fonsiz mt-6'>We proudly lead a transformative movement towards eco-conscious transportation.</h1>
                </div>
            </div>
            {isWindow ?
                <div className='flex flx-clmn justify-between mx-24 marg-x marg-y z-10'>
                    <div className='w-[20%] w-fp mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="50">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Passion</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Dedicated to revolutionizing the way the world charges its electric vehicles, Recharga Chargine is more than just a company; it's a commitment to environmental responsibility and technological advancement. </p>
                    </div>
                    <div className='w-[20%] w-fp mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="450">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Vision</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>We envision a world where electric vehicles seamlessly integrate into daily life, powered by an efficient and accessible charging infrastructure. Through cutting-edge technology and a commitment. </p>
                    </div>
                    <div className='w-[20%] w-fp mr' data-aos="fade-right" data-aos-duration="200" data-aos-delay="950">
                        <h1 className='font-[500] leading-[24px] text-[20px] text-[#00FE5E]'>Our Mission</h1>
                        <p className='font-[500] leading-[36px] text-[20px] text-[#D0D0D0] mt-6'>Our mission is twofold: to develop innovative charging solutions that redefine the EV experience and to inspire a global community to embrace electric mobility. </p>
                    </div>
                </div>
                :
                <div className='flex flx-clmn justify-between mx-24 marg-x marg-y z-10' data-aos="fade-up" data-aos-duration="200" data-aos-delay="950">
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
            }
        </div>
    );
}

export default FifthPage