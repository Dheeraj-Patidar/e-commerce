import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { removeFromWishlist ,addToCartFromWishList} from '../redux/WishListSlice'

export default function WishListPage() {

    const dispatch=useDispatch()
    const wishlist=useSelector((state)=>state.wishlist.wishlist)
   
    const handleAddToCart=(id)=>{
        dispatch(addToCartFromWishList(id))
    }

    const handleRemoveFromWishList=(id)=>{
        dispatch(removeFromWishlist(id));
    };

  return (

    <>
<div className="p-8 mt-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Wishlist</h2>

            {wishlist.length === 0 ? (
                <p className="text-center text-lg text-gray-600">Your Wishlist is empty!</p>
            ) : (
                
                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left">Product</th>
                                    <th className="py-3 px-6 text-left">Price</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-6 flex items-center">
                                            <img className="w-16 h-16 object-cover rounded" src={item.image} alt={item.title} />
                                            <div className="ml-4">
                                                <p className="text-sm font-semibold">{item.title}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-left text-gray-800">Rs {item.price}</td>
                                        
                                        <td className="py-4 px-6 text-center">
                                            <button
                                                onClick={() => handleRemoveFromWishList(item.id)}
                                                className="mr-5 px-4 py-2 bg-red-500 text-black rounded hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 hover:cursor-pointer "
                                            >
                                                Remove
                                            </button>

                                            <button
                                                onClick={()=>handleAddToCart(item.id)}
                                                className=" px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-pointer">
                                                Add To Cart
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                   
                
            )}
        </div>

</> 
  )

}