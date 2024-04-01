import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import MainPage from './HomeScreens/MainPage'
import SideNav from '../components/SideNav'

const Home = () => {
    const [burger, setBurger] = useState(false);
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
    return (
        <div className='bg-[#020803] text-[#fff]'>
            <NavBar burger={burger} setBurger={setBurger} />
            <div className='flex'>
                <MainPage />
                {burger && isWindow && (
                    <SideNav />
                )}
            </div>
        </div>
    )
}

export default Home
