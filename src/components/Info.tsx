import Image from 'next/image'
import React from 'react'
import infoImage from '../../public/survey-testing.png'

const Info = () => {
  return (
    <div className='bg-white h-svh flex justify-center items-center'>
      <div className="container flex flex-row justify-center items-center gap-20">
        <div className="">
            <Image src={infoImage} alt='Info image' />
        </div>
        <div className="">
          <h1 className='my-10 font-bold text-5xl bg-gradient-to-b from-blue-900 to-purple-500 bg-clip-text text-transparent'>The all-in-one platform for surveys, forms, and market research</h1>
          <p className='font-medium text-xl'>Survey makes it quick and easy to ask the right questions the right way, and get fast and powerful insights 
            that help you delight your customers, build a happy and productive workforce, and win in your market.
          </p>
          <button className='border-2 border-solid border-blue-500 text-blue-700 my-10 px-4 py-2 rounded-lg hover:bg-blue-300'>Get product overview</button>
        </div>
      </div>
    </div>
  )
}

export default Info