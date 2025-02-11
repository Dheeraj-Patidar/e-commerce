import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addproduct } from '../redux/AddProductSlice';
import {toast} from "react-hot-toast"

export default function AddProductPage() {
   const dispatch=useDispatch();

   const [product,setProduct]=useState({
    image:'',
    name:'',
    price:'',
    description:'',

   })

    const handleChange=(e)=>{
        const { name, value, type, files} = e.target;

        if (type === 'file') {
          
          setProduct({ ...product, [name]: files[0] }); 
        } else {
          setProduct({ ...product, [name]: value });
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addproduct(product));
        toast.success("Product added successfuly ")
        setProduct({image:'',name:'',price:'',description:''});
    }


  return (
    <>
    
    <div className="max-w-lg mx-auto mt-40 my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form onSubmit={handleSubmit}>

      <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            // value={product.image}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    
    
    </>
  )
}
