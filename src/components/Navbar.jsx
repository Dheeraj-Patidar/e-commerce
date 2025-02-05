import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    
    
        <nav className="bg-black p-4 fixed w-full top-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="text-white text-2xl font-bold">D P</a>
    
                <div className=" md:flex flex-1 mx-4 bg-amber-50 rounded-r-lg" >
                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-l-lg focus:outline-none" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                        Search
                    </button>
                </div>
    
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                </div>
    
                
                <div className="flex items-center space-x-6">
                    
                    
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Cart</a>
    
                   <div id="auth-links" className="flex items-center space-x-4">
                        <Link to='/login' id="login-link" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Login</Link>
                        <a href="#" id="signup-link" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Sign Up</a>
                    </div>
                    <div id="logout-link" className="flex items-center space-x-4 ">
                        <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Logout</a>
                    </div>
                </div>
    
                <div className="md:hidden flex items-center">
                    <button className="text-white" id="hamburger-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    
        <div className="md:hidden hidden" id="mobile-menu">
            <div className="bg-gray-800 p-4 space-y-2">
                <a href="#" className="text-white block px-3 py-2 rounded">Home</a>
                <a href="#" className="text-white block px-3 py-2 rounded">About</a>
                <a href="#" className="text-white block px-3 py-2 rounded">Services</a>
                <a href="#" className="text-white block px-3 py-2 rounded">Contact</a>
            </div>
        </div>
    
        
    
    
    
    </>
  )
}
