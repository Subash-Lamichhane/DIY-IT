import React from 'react'
import maintainImage from '../../images/maintainance.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Maintainance = () => {
  return (
    <div className='w-screen h-screen bg-gray-100 flex justify-center items-center flex-col'>
        <div className='h-[24rem] w-[24rem]'>
            <img src={maintainImage}  />
        </div>
        <div>
            <h1 className='text-5xl text-black font-bold my-5'>We'll be back soon!</h1>
        </div>
        <h1 className='text-3xl text-gray-700'>This website is currently undergoing scheduled maintenance. We will be back shortly.</h1>

        <div className='mt-14'>
            <h1 className='text-2xl text-black font-bold text-center'>Visit us on social.</h1>
            <div className='mt-8 flex flex-row gap-8 '>
                <div className='text-blue-500 text-5xl'><FaTwitter /></div>
                <div className='text-red-500 text-5xl'><FaInstagram /></div>
                <div className='text-blue-500 text-5xl'><CiFacebook /></div>
                <div className='text-blue-400 text-5xl'><CiLinkedin /></div>
            </div>
        </div>
    </div>
  )
}

export default Maintainance