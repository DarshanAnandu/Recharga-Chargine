import React, { useEffect, useRef } from 'react'

const NinthPage = () => {
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

export default NinthPage