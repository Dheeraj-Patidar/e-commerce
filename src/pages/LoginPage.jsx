import React from 'react'
import users from '../utils/Users'

export default function LoginPage() {
  
    
  
  
  
    return (
    <>
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login to Your Account</h2>
    
   
    <form action="#" method="POST">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <button 
        type="submit" 
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Log In
      </button>
      
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
      </div>
    </form>
    
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">Don't have an account? 
        <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
      </p>
    </div>
  </div>
</div>

    
    </>
  )
}
