import React from 'react'
// import Navbar  from './navbar'
// import Card from './Card'
import ProductList from './ProductList'

export default function Home() {
  return (
    <>
   
    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center">
    <div className="text-center text-white">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome </h1>
    <p className="text-lg sm:text-xl mb-6">We're glad you're here. Explore and enjoy your stay!</p>
     </div>
    </div>



    <ProductList/>
    
   

    </>
  )
}
