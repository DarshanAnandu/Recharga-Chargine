import React, { useState, useEffect, useRef } from 'react'

const EighthPage = () => {
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
                        <div className='w-[50%] w-fp'>
                            <span className='font-[500] leading-[24px] text-[20px] text-[#00FE5E] my-6'>Invest with us</span>
                            <h1 className='font-bold leading-[61.2px] text-[51px] red-fonsiz text-[#FFFFFF] my-6'>Invest in Future</h1>
                            <p className='font-[500] leading-[24px] text-[20px] text-[#FFFFFF] my-6'>Join us as we embark on a journey to power tomorrow's mobility. Invest in Recharga Chargine, where innovation meets sustainability, and together, we shape a cleaner, greener future.</p>
                            <button className='font-[700] text-[20px] leading-[28px] text-[#FFFFFF] py-[16.31px] px-[48.94px] border-[1.02px] transition border-[#00DD52] hover:bg-[#00DD52] rounded-[15px] mt-16' onClick={() => setJoin(true)}>Join Us</button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-col my-8 w-[70%] w-fp' data-aos="fade-zoom-in" data-aos-duration="800" data-aos-delay="150">
                            <div className='flex items-center'>
                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0184 0.112896C17.8548 0.0384955 17.6772 0 17.4975 0C17.3178 0 17.1401 0.0384955 16.9766 0.112896L10.3757 3.11764L17.4925 6.35894L24.6143 3.11513L18.0184 0.112896ZM9.19291 13.0278V5.34226L16.2392 8.55085V17.0442L9.92522 14.1728C9.7054 14.0728 9.51899 13.9117 9.38825 13.7087C9.2575 13.5056 9.18794 13.2693 9.18788 13.0278H9.19291ZM18.7558 29.9188V21.5135L25.4296 24.5535V33.0468L19.1232 30.1755C18.9854 30.1128 18.8626 30.0259 18.7558 29.9188ZM27.9461 33.0519V24.5535L35 21.3424V29.0304C34.9999 29.2719 34.9304 29.5083 34.7996 29.7113C34.6689 29.9144 34.4825 30.0755 34.2627 30.1755L27.9461 33.0519ZM16.2342 21.5135V29.9288C16.1295 30.0314 16.0077 30.1148 15.8743 30.1755L9.55781 33.0519V24.5535L16.2342 21.5135ZM7.04127 24.5535V33.0468L0.737345 30.1755C0.517523 30.0755 0.331114 29.9144 0.200369 29.7113C0.0696243 29.5083 6.6868e-05 29.2719 0 29.0304V21.3449L7.0463 24.5535H7.04127ZM18.7507 17.0492V8.54833L25.8046 5.33723V13.0278C25.8045 13.2693 25.7349 13.5056 25.6042 13.7087C25.4735 13.9117 25.2871 14.0728 25.0672 14.1728L18.7507 17.0492ZM26.1695 16.1181C26.3331 16.0437 26.5107 16.0052 26.6904 16.0052C26.8701 16.0052 27.0477 16.0437 27.2113 16.1181L33.8046 19.1178L26.6828 22.3616L19.5736 19.1178L26.172 16.113L26.1695 16.1181ZM7.78365 16.1181C7.94724 16.0437 8.12486 16.0052 8.30457 16.0052C8.48428 16.0052 8.66191 16.0437 8.8255 16.1181L15.4188 19.1178L8.29954 22.3641L1.18529 19.1178L7.78365 16.1181Z" fill="#00FE5E" />
                                </svg>
                                <h1 className='font-[400] leading-[28px] text-[23px] pl-4 text-[#00FE5E]'> Innovation Unleashed</h1>
                            </div>
                            <p className='font-[400] leading-[34px] text-[20px] text-[#FFFFFF] my-6'>Our team is at the forefront of charging technology, driving innovation that shapes the future of eco-conscious mobility.</p>
                        </div>
                        <div className='flex flex-col my-8 w-[70%] w-fp' data-aos="fade-zoom-in" data-aos-duration="600" data-aos-delay="550">
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
                        <div className='flex flex-col my-8 w-[70%] w-fp' data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="950">
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

export default EighthPage