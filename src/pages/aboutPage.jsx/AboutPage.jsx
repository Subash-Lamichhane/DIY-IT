import React from 'react'
import Navbar from '../../components/Navbar'

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar/>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-center mb-6">About the Web App</h1>
                <p className="text-lg text-gray-800 mb-8">
                    DIY-IT is a web app  designed to provide users with step-by-step guides for creating various crafts using household items. Whether you're a beginner looking to explore the world of crafting or an experienced crafter seeking new projects, our platform offers a diverse range of DIY ideas to suit your interests and skill level.
                </p>
                <p className="text-lg text-gray-800 mb-8">
                    In addition to curated DIY projects, this platform features an AI-powered custom DIY product generator. This innovative tool allows users to input their preferences and receive personalized crafting ideas generated by our AI algorithm. It's a fun and creative way to explore new crafting possibilities and make the most out of your free time.
                </p>
                <p className="text-lg text-gray-800 mb-8">
                    Whether you're looking to spruce up your living space, create unique gifts for loved ones, or simply unwind with a creative activity, our web app is here to inspire and empower you on your crafting journey. Use DIY-IT today and unleash your creativity with DIY Crafts!
                </p>
            </div>
        </div>
    );
}

export default AboutPage;