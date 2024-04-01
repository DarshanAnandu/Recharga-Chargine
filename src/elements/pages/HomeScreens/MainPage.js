import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import '../../../App.css'
import 'aos/dist/aos.css';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import EighthPage from './EighthPage'
import NinthPage from './NinthPage'
import TenthPage from './TenthPage'
import EleventhPage from './EleventhPage';
import TwelethPage from './TwelethPage';

const MainPage = () => {
    const [isWindow, setIsWindow] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1070) {
                setIsWindow(true);
            } else {
                setIsWindow(false);
            }
        };

        if (typeof window !== 'undefined') {
            // Add event listener for window resize
            window.addEventListener('resize', handleResize);

            // Call handleResize on initial render
            handleResize();

            // Clean up event listener on component unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [])
    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, [])
    return (
        <div className='h-full w-full'>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage isWindow={isWindow} />
            <SixthPage isWindow={isWindow} />
            <SeventhPage />
            <EighthPage />
            <NinthPage />
            <TenthPage />
            <EleventhPage />
            <TwelethPage />
        </div>
    )
}

export default MainPage
