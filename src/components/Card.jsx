import React from 'react'
// import {useCart} from '../contexts/CartContext'
import { addToCart } from '../redux/CartSlice';
import {useDispatch,useSelector} from 'react-redux'
import { addToWishList } from '../redux/WishListSlice'

export default function Card({ product }) {
   
    // const {addToCart}=useCart();
    const dispatch=useDispatch();

   const handleAddToCart=()=>{
    // addToCart(product);
    dispatch(addToCart(product));
   }

   const handleAddToWishList=()=>{
    dispatch(addToWishList(product))
   }
   
    return (
        <>

            <div className=''>
                <div className="max-w-sm mb-10  rounded overflow-hidden  transition duration-300 ease-in-out shadow-lg bg-white hover:shadow-black transform hover:scale-105">

                    <img className="w-full h-100 object-cover" src={product.image} alt="Card image" />


                    <div className="p-6">

                        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>


                        <p className="text-gray-600 mt-2">{product.description}</p>


                        <p className="text-lg font-bold text-gray-900 mt-4">Rs {product.price}</p>

                        <div className="mt-6 flex space-x-4">
                            
                            <button onClick={handleAddToCart} className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Add to Cart
                            </button>
                            
                            <button onClick={handleAddToWishList}  className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                Wish List
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
