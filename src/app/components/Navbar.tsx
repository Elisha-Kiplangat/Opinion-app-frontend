import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">
          MyLandingPage
        </div>
        <ul className="flex space-x-6">
          <li><Link href="#home" className="hover:bg-blue-500 p-10">Home</Link></li>
          <li><Link href="#features" className="hover:text-blue-500">Features</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar