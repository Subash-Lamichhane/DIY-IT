import React, { useState, useEffect } from 'react'
// import { Link, Router } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

// import { Button } from './Button';
// import './Navbar.css';

export const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => { setClick(!click) }

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 760) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <header className="min-h-24 flex justify-center ">
                <nav className="flex justify-between items-center w-[92%]  mx-auto pt-4">
                    <div className='text-3xl font-bold ml-4 md:ml-10'>
                            <Link to="/">DIY-IT</Link>
                    </div>
                    <div
                        className={!click ? "nav-links duration-300 md:static absolute md:min-h-fit md:w-auto  w-full flex items-center px-5 left-[-50rem] top-[6rem]" :
                            "nav-links duration-500 md:static absolute bg-white text-black left-0 md:w-auto  w-full flex items-center px-5 top-[5.25rem]"}>

                        <ul className="flex md:flex-row flex-col items-center md:gap-[4vw] gap-5 w-full text-xl font-bold p-5  ">
                            <li className={!button ? 'hover:bg-gray-200 w-full text-center hover:text-black h-10 rounded-xl flex align-center justify-center md:hover:text-gray-800 pt-1' :
                                'hover:text-gray-800 w-full text-center flex align-center justify-center md:hover:text-gray-600 hover:border-b-2 border-black rounded-xl px-[1.25rem]'}>
                                <Link to="/">
                                Explore
                                </Link>
                            </li>
                            <li className={!button ? 'hover:bg-gray-200 w-full text-center hover:text-black h-10 rounded-xl flex align-center justify-center md:hover:text-gray-800 pt-1' :
                                'hover:text-gray-800 w-full text-center flex align-center justify-center md:hover:text-gray-600 hover:border-b-2 border-black rounded-xl px-[1.25rem]'}>
                                <Link to="/generate">
                                Generate
                                </Link>
                            </li>
                            <li className={!button ? 'hover:bg-gray-200 w-full text-center hover:text-black h-10 rounded-xl flex align-center justify-center md:hover:text-gray-800 pt-1' :
                                'hover:text-gray-800 w-full text-center flex align-center justify-center md:hover:text-gray-600 hover:border-b-2 border-black rounded-xl px-[1.25rem]'}>
                                <Link to="/about">
                                About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6 ">
                        {/* <button className="bg-[#a0bff5] text-black px-5 py-2 rounded-full hover:bg-[#40629c] hover:text-white text-xl ">Sign in</button> */}
                        {
                            click ? (
                                <ImCross onClick={handleClick} name="menu" className="text-3xl cursor-pointer md:hidden" />
                            ) : (
                                <GiHamburgerMenu onClick={handleClick} name="menu" className="text-3xl cursor-pointer md:hidden" />
                            )
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
