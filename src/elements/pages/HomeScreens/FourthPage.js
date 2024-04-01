import Logo from '../../assets/Logo.svg'
import Round from '../../assets/round.svg'
const FourthPage = () => {
    return (
        <div className='p-12 h-100'>
            <div className='flex items-center'>
                <h1 className='font-bold leading-[53.04px] text-[51px] red-fonsiz'>How it works </h1>
                <img src={Logo} alt='' className='h-[74.73px] pl-6 w-auto' />
            </div>
            <div className='flex items-center my-14' data-aos="fade-right" data-aos-duration="200" data-aos-delay="50">
                <img src={Round} alt='' className='h-[66.31px] w-auto mr-14 mr' />
                <span className='font-bold leading-[96px] text-[96px] red-fonsiz-2 mr-14 mr'>1</span>
                <div className='flex flex-col'>
                    <h1 className='font-semibold leading-[25.2px] text-[18px]'>Capture Kinetic Energy</h1>
                    <p className='font-normal leading-[26px] text-[20px]'>As you drive, your vehicle's movement is transformed into electric power for charging.</p>
                </div>
            </div>
            <div className='flex items-center my-14' data-aos="fade-right" data-aos-duration="200" data-aos-delay="650">
                <img src={Round} alt='' className='h-[66.31px] w-auto mr-14 mr' />
                <span className='font-bold leading-[96px] text-[96px] red-fonsiz-2 mr-14 mr'>2</span>
                <div className='flex flex-col'>
                    <h1 className='font-semibold leading-[25.2px] text-[18px]'>Convert to Electricity</h1>
                    <p className='font-normal leading-[26px] text-[20px]'>Our system efficiently converts kinetic energy to electricity, minimizing energy loss.</p>
                </div>
            </div>
            <div className='flex items-center my-14' data-aos="fade-right" data-aos-duration="200" data-aos-delay="950">
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
export default FourthPage;
