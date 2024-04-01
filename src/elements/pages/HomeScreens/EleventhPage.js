import React from 'react'
import Img from '../../assets/round2.svg'

const EleventhPage = () => {
    return (
        <div className='font-[Satoshi] h-100' style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPositionX: '570px', backgroundPositionY: '' }}>
            <p className='font-[500] leading-[28px] text-[20px] text-[#00FE5E] text-center my-6'>Newsletter</p>
            <h1 className='font-[700] leading-[53.04px] text-[51px] text-[#FFFFFF] text-center my-6 '>Join charged chatter </h1>
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

export default EleventhPage