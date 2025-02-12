import React from 'react'
import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/CartSlice';
import toast from 'react-hot-toast';
export default function CheckoutPage() {
    const Navigate=useNavigate()
    const dispatch=useDispatch();
    const cartItems = useSelector((state) => state.cart.cart); 
    const [shippingInfo, setShippingInfo] = useState({
      name: '',
      address: '',
      city: '',
      zipCode: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setShippingInfo({ ...shippingInfo, [name]: value });
    };
  
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    const handleSubmitOrder = (e) => {
      e.preventDefault();
      dispatch(clearCart());
      Navigate('/')
      
    //   const orderData = {
    //     items: cartItems,
    //     shipping: shippingInfo,
    //     total: calculateTotal(),
    //   };
      
      
      setShippingInfo({
        name: '',
        address: '',
        city: '',
        zipCode: '',
      });
      
      toast.success("Order Placed Successfully!")
     
    };
  




  return (
    <>
    

  
  return (
    <div className="checkout-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>

      <div className="cart-items">
        <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
       
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title} (x {item.quantity})</span>
                <span>Rs {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        
      </div>

      <div className="shipping-info mt-6">
        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
        <form onSubmit={handleSubmitOrder}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={shippingInfo.zipCode}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="order-summary mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="flex justify-between mt-2">
              <span>Total:</span>
              <span>Rs {calculateTotal()}</span>
            </div>
          </div>

          <div className="mt-6">
            <button 
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );


    
    </>
  )
}
