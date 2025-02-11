import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
// import {useAuth} from '../contexts/AuthContext';
import { useDispatch ,useSelector} from 'react-redux';
import { logout } from '../redux/AuthSlice';
// import { useCart } from '../contexts/CartContext';
import {setSearch } from '../redux/SearchSlice';
import {toast} from "react-hot-toast"


export default function Navbar() {


    // const {logout,isAuthenticated,user}=useAuth();
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.auth.user)
    
    const search=useSelector((state)=>state.search.search)
    const cart=useSelector((state)=>state.cart.cart);
    const wishlist=useSelector((state)=>state.wishlist.wishlist);
    const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);

    // const {cart}=useCart();


    const handleLogout = () => {
        dispatch(logout());
        toast.error("Logout Successfully")
    };
  
    const handleSearchChange=(e)=>{
        dispatch(setSearch(e.target.value)); 
    }

    return (
    <>
    
      <div>
        <nav className="z-10 bg-black -1 p-4 fixed w-full top-0">
            <div className=" max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="text-red-800 text-5xl pr-20 font-bold">DP STORE</a>
    
                <div className=" md:flex flex-1 mx-4 bg-amber-50 rounded-r-lg" >
                    <input type="text" value={search} onChange={handleSearchChange}  placeholder="Search..." className="w-full px-4 py-2 rounded-l-lg focus:outline-none" />
                    {/* <button className="bg-blue-600 text-2xl text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                        Search
                    </button> */}
                </div>
                <div className=' md:flex space-x-6'>
                <div className=" md:flex space-x-6">
                    {!user ?(
                    <Link to={'/'} className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Home<MdHome className='inline-block' /></Link>
                    ):
                    user.role === 'buyer' ?(
                        <Link to={'/buyer'} className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Home<MdHome className='inline-block items-center'/></Link>
                    ):user.role==="seller" ?
                    (
                    <Link to={'/seller'} className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Home<MdHome className='inline-block'/></Link>
                    ):
                    (<Link to={'/'} className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Home<MdHome className='inline-block'/></Link>
                    )
                   }
                {/* <Link to={'/'} className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Home</Link> */}
                </div>
    
                
                <div className="flex items-center space-x-6">
                 {!user ?(
                  <div >
                    <Link to='/cart' className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"> <FaShoppingCart className='inline-block'/> {cart.length}</Link>
                
                    <Link to='/wishlist' className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">WishList {wishlist.length}</Link>
                  </div>
                ):
                 user.role === "buyer" ?(
                  <div >
                    <Link to='/cart' className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"><FaShoppingCart className='inline-block'/> {cart.length}</Link>
                
                    <Link to='/wishlist' className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">WishList {wishlist.length}</Link>
                  </div>
                ):
                user.role === "seller" ?(
                    <div>
                     
                      <Link to={'/addproduct'} className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Add Product</Link>
                    </div>
                  ):
                (
                    <div >
                    <Link to='/cart' hidden className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"><FaShoppingCart className='inline-block'/> {cart.length}</Link>
                
                    <Link to='/wishlist' hidden className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">WishList {wishlist.length}</Link>
                  </div>
                )
                 }

                {!isAuthenticated ?(
                   <div id="auth-links" className="flex items-center space-x-4">
                        <Link to='/login' id="login-link" className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Login</Link>
                        <a href="#" id="signup-link" className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded">Sign Up</a>
                    </div>
                  ): 
                 (
                    <div id="logout-link" className="flex items-center space-x-4 ">
                       <Link to='/' className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded" onClick={handleLogout}>Logout</Link>
                    </div>
                  )} 
                </div>
    
                <div className="md:hidden flex items-center">
                    <button className="text-white"  id="hamburger-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </nav>
    
        
    
        
    
    
        </div>
    </>
  )
}
