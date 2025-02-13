import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/AuthSlice';
import { setSearch } from '../redux/SearchSlice';
import { toast } from 'react-hot-toast';
export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const search = useSelector((state) => state.search.search);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logout Successfully');
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="z-10 bg-gray-700 text-black p-4 fixed w-full top-0">
        <div className="  max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-red-400 lg:text-5xl lg:pr-20 font-bold">
            <span className='italic'>DP STORE</span>
          </a>

          <div className="hidden md:flex flex-1 mx-4 bg-amber-50 rounded-r-lg">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="md:flex w-full px-4 py-2 rounded-l-lg focus:outline-none text-black"
            />
          </div>

         <div className="md:hidden flex items-center">
            <button className="text-white" onClick={toggleMobileMenu}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

         <div className="hidden md:flex ">
            <div className="md:flex space-x-6">
              <Link
                to={user ? `/${user.role}` : '/'}
                className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
                <MdHome className="inline-block" />
              </Link>
            </div>
           
            <div className="flex items-center space-x-6">
              {user && user.role === 'seller' && (
                <Link
                to="/addproduct"
                className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
              >Add Product</Link>)}
              {user && user.role === 'buyer' ? (
              <div>
              <Link
                to="/cart"
                className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
              >
                <FaShoppingCart className="inline-block" /> {cart.length}
              </Link>
              <Link
                to="/wishlist"
                className="text-white text-2xl hover:bg-gray-700 lg:px-3 py-2 rounded"
              >
                WishList {wishlist.length}
              </Link>
              </div>
              ):!user &&
              (
                <div>
                <Link
                  to="/cart"
                  className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                >
                  <FaShoppingCart className="inline-block" /> {cart.length}
                </Link>
                <Link
                  to="/wishlist"
                  className="text-white text-2xl hover:bg-gray-700 lg:px-3 py-2 rounded"
                >
                  WishList {wishlist.length}
                </Link>
                </div>)}
              {!isAuthenticated ? (
                <div id="auth-links" className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                  >
                    Login
                  </Link>
                  <a
                    href="#"
                    className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                  >
                    Sign Up
                  </a>
                </div>
              ) : (
                <div id="logout-link" className="flex items-center space-x-4">
                  <Link
                    to="/"
                    className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>



      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white mt-20 p-4 fixed w-full top-0 z-10">
          <div className="flex-1 mx-4 bg-amber-50 rounded-r-lg">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-black"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
            >
              Home
              <MdHome className="inline-block" />
            </Link>

            <Link
              to="/cart"
              className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
            >
              <FaShoppingCart className="inline-block" /> {cart.length}
            </Link>

            <Link
              to="/wishlist"
              className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
            >
              WishList {wishlist.length}
            </Link>
            {user && user.role === 'seller' && (
                <Link
                to="/addproduct"
                className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
              >Add Product</Link>)}
              
            {!isAuthenticated ? (
              <div id="auth-links" className="flex flex-col space-y-4">
                <Link
                  to="/login"
                  id="login-link"
                  className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Login
                </Link>
                <a
                  href="#"
                  id="signup-link"
                  className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Sign Up
                </a>
              </div>
            ) : (
              <div id="logout-link" className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-white text-2xl hover:bg-gray-700 px-3 py-2 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
