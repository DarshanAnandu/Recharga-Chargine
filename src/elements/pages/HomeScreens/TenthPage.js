import React from 'react'

const TenthPage = () => {
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

export default TenthPage