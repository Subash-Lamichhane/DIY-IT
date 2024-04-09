import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel1 = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1497219055242-93359eeed651?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1503236641037-129adbdfb266?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1534769549239-a38ef6ace900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },

        {
            url: 'https://images.unsplash.com/photo-1612528910395-0297ec160cc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1673375201464-9e3e6b1c041e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-full h-[500px] w-full m-auto relative group flex flex-row'>
            <div className='craft-card bg-black bg-opacity-80 flex justify-center flex-col px-14 text-white shadow-lg w-[25%]'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Unleash Your </h1>
                <h1 className='text-4xl md:text-5xl font-bold mb-4 text-red-400'>Creativity!</h1>
                <div className='my-5'>
                    <p className='text-lg md:text-xl my-2'>Discover Exciting New Crafts</p>
                    <p className='text-lg md:text-xl my-2'>Harness the Power of AI</p>
                    <p className='text-lg md:text-xl my-2'>Get Creative with Crafts</p>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-[75%] h-full bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>
    )
}

export default Carousel1