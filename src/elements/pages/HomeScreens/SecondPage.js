import React, { useState, useEffect } from 'react'

const SecondPage = () => {
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

        const animateElement = document.querySelector('.animate-watch');
        observer.observe(animateElement);

        return () => {
            observer.unobserve(animateElement);
        };
    }, []);
    return (
        <div className={`flex flex-col items-center text-center realative w-full h-100 animate-watch ${animate ? 'animate' : ''}`} style={{ height: `calc(100vh - ${'108px'})` }}>
            {/* <div className='flex flex-col items-center text-center' style={{ height: `calc(100vh - ${ '108px'})`, background: `url(${ Bg2 })`, backgroundPosition: `${ scrollPosition }px 50 % `, animation: 'slideBackground 10s linear infinite', backgroundSize: 'cover' }}> */}
            <p className='text-[#00DD52] font-normal leading-[24px] z-10 text-[20px] w-[60%] mt-[10%]'>Visionary Innovation</p>
            <h1 className='font-bold leading-[61.2px] text-[51px] red-fonsiz z-10 w-[60%] w-fp mt-12'>Reimagining energy for eMobility, we create sustainable charging solutions for electric vehicles.</h1>
        </div>
    );
}

export default SecondPage