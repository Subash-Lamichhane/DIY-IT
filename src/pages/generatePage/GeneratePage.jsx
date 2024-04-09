import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import StepsCard from '../../components/StepsCard';
import Footer from '../../components/Footer';

const GeneratePage = () => {
    const [productDetail, setProductDetail] = useState('');
    const [itemsAvailable, setItemsAvailable] = useState('');
    const [answer, setAnswer] = useState([]);
    const [loading,setLoading]= useState(false)

    const generateAnswer = async () => {
        setLoading(true)
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAEpnjFWlZsI5bjPgNqA6HO8amJ-wjx49A",
            method: "post",
            data: {
                "contents": [
                    { "parts": [{ "text": "Generate steps to develop DIY product with following details:" + productDetail + "and with given items:" + itemsAvailable + ". The output steps must be in array format. Like ['Step1: ...', 'Step2: ...., .... ]. It should strictly be in array format!. Do not include other details. only provide me array of steps." }] }
                ]
            }
        })
        setLoading(false)

        // console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
        const stringResponse=response['data']['candidates'][0]['content']['parts'][0]['text']
        const validJSONString = stringResponse.replace(/'/g, '"');
        setAnswer(JSON.parse(validJSONString));
    }

    useEffect(() => {

    }, [loading]);
    return (
        <>
            <Navbar />
            <hr />
            <div className=''>

                <div className='grid grid-cols-1 md:grid-cols-2 mx-32 my-10'>
                    <div>
                        <div className=''>
                            <h2 className='text-2xl'>Describe DIY product you want to make:</h2>
                            <textarea className=' w-[90%] h-72 border-2 border-black text-lg p-2' value={productDetail} onChange={(e) => { setProductDetail(e.target.value) }}></textarea>
                        </div>
                        <div>
                            <h2 className='text-2xl'>Describe items that are available to you:</h2>
                            <textarea className=' w-[90%] h-24 border-2 border-black text-lg p-2' value={itemsAvailable} onChange={(e) => { setItemsAvailable(e.target.value) }}></textarea>
                            <div className="w-full flex justify-center">
                                <button onClick={generateAnswer} className='bg-blue-500 text-white border-[0.2rem] border-blue-500 w-[20rem] h-12 rounded-md text-2xl my-10 hover:text-blue-500 hover:bg-white'>Generate Steps</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {answer.length !== 0 && <StepsCard recipeData={answer} />}
                        {answer.length == 0 && loading==false &&
                            <>
                                <div className='h-32 '></div>
                                <h1 className='text-2xl text-center text-gray-500'>Try new DIY and Crafts.</h1>
                            </>}
                        {answer.length == 0 && loading!=false &&
                            <>                            <div className='flex justify-center items-center h-full'>
                            <div className="animate-spin rounded-full h-12 wx-12 wt-8 border-t-4 border-b-4 border-black"></div>
                        </div></>}

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default GeneratePage