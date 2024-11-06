import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-blue-200 to-indigo-200 h-screen flex flex-col justify-center items-center">
            <div className="text-white font-extrabold text-5xl font-sans">
            Opinion
            </div>
            <div className="text-white font-medium text-lg mt-4">
            A simple blog platform
            </div>
            <div className="flex space-x-4 mt-8">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
                Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
            </button>
            </div>
        </section>
    </div>
  )
}

export default HeroSection