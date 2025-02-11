import React from 'react'
// import { useCart } from '../contexts/CartContext'
import { useDispatch ,useSelector } from 'react-redux';
import { removeFromCart ,updateQuantity } from '../redux/CartSlice';



 function CartPage() {
    // const { cart, removeFromCart, updateQuantity } = useCart();
    const cart=useSelector((state)=>state.cart.cart);

    const dispatch=useDispatch();

    const handleQuantityChange = (e, productId) => {
        const newQuantity = parseInt(e.target.value, 10);
        dispatch(updateQuantity({ productid: productId, quantity: newQuantity }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="p-8 mt-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
            ) : (
                <>
                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left">Product</th>
                                    <th className="py-3 px-6 text-left">Price</th>
                                    <th className="py-3 px-6 text-center">Quantity</th>
                                    <th className="py-3 px-6 text-right">Total</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-50">
                                        <td className="py-4 px-6 flex items-center">
                                            <img className="w-16 h-16 object-cover rounded" src={item.image} alt={item.title} />
                                            <div className="ml-4">
                                                <p className="text-sm font-semibold">{item.title}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-left text-gray-800">Rs {item.price}</td>
                                        <td className="py-4 px-6 text-center">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(e, item.id)}
                                                min="1"
                                                className="w-16 p-2 border rounded-lg text-center"
                                            />
                                        </td>
                                        <td className="py-4 px-6 text-right text-gray-800">Rs {item.price * item.quantity}</td>
                                        <td className="py-4 px-6 text-center">
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id)) }
                                                className="bg-red-500 text-white p-2 rounded-2xl hover:bg-red-600 hover:cursor-pointer  "
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <p className="font-bold text-xl">Total: Rs {calculateTotal()}</p>
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;