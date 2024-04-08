import React, { useEffect } from 'react'
import flagsmith from 'flagsmith';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import DiyCards from '../../components/DiyCards';
import Carousel1 from '../../components/Carousel1';
import Carousel2 from '../../components/Carousel2';
import GeneratePage from '../generatePage/GeneratePage';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
const HomePage = () => {

    // const flags = useFlags(['button_feature','design_1']); // only causes re-render if specified flag values / traits change

    // const button_size =  flags.button_feature.value;
    // const design_1 = flags.design_1.enabled;

    const cardsData = [
        {
            title: "Shoes",
            imageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            isNew: true,
            categories: ['Fashion', 'Products']
        },
        {
            title: "Sunglasses",
            imageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            description: "Stay cool with our stylish sunglasses.",
            isNew: false,
            categories: ['Fashion', 'Accessories']
        },
        {
            title: "Backpack",
            imageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            description: "Carry your essentials with ease.",
            isNew: true,
            categories: ['Fashion', 'Accessories', 'Travel']
        },
        {
            title: "Handbag",
            imageSrc: "https://daisyui.com/images/stock/photo-1618336696967-8bb0f7a2d824.jpg",
            description: "Complete your outfit with our stylish handbags.",
            isNew: false,
            categories: ['Fashion', 'Accessories']
        },
        {
            title: "Watches",
            imageSrc: "https://daisyui.com/images/stock/photo-1609694946596-60b52bb74f86.jpg",
            description: "Stay punctual with our range of watches.",
            isNew: true,
            categories: ['Fashion', 'Accessories']
        },
        {
            title: "Hats",
            imageSrc: "https://daisyui.com/images/stock/photo-1618336696967-8bb0f7a2d824.jpg",
            description: "Top off your look with our trendy hats.",
            isNew: true,
            categories: ['Fashion', 'Accessories']
        },
        {
            title: "T-Shirts",
            imageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            description: "Casual comfort with our stylish t-shirts.",
            isNew: false,
            categories: ['Fashion', 'Clothing']
        },
        {
            title: "Jeans",
            imageSrc: "https://daisyui.com/images/stock/photo-1618336696967-8bb0f7a2d824.jpg",
            description: "Classic denim for every occasion.",
            isNew: false,
            categories: ['Fashion', 'Clothing']
        },
    ];
    const desig = true

    return (
        <>
            <Navbar />
            {desig && <Carousel1 />}
            {!desig && <Carousel2/>}
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 m-10 md:mx-32 md:my-20'>
                {cardsData.map((card, index) => (
                    <DiyCards
                        key={index}
                        title={card.title}
                        imageSrc={card.imageSrc}
                        description={card.description}
                        isNew={card.isNew}
                        categories={card.categories}
                    />
                ))}
            </div>
        </>
    )
}

export default HomePage