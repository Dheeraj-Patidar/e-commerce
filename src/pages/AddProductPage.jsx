import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addproduct, deleteproduct, editproduct } from '../redux/AddProductSlice';


export default function AddProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addproduct.products);

  const [product, setProduct] = useState({
   
    image: null,
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create URL for file or use the existing image URL
    const imageUrl = product.image && typeof product.image !== 'string' ? URL.createObjectURL(product.image) : product.image;

    if (product.id) {
      dispatch(editproduct({ ...product, image: imageUrl }));
      toast.success('Product updated successfully');
    } else {
      dispatch(addproduct({ ...product, image: imageUrl }));
      toast.success('Product added successfully');
    }

    setProduct({  image: null, name: '', price: '', description: '' });
    document.getElementById('image').value = '';  // Reset file input
  };

  const handleEditClick = (product) => {
    setProduct(product);
  };

  const handleDelete = (productId) => {
    dispatch(deleteproduct(productId));
    toast.success('Product deleted successfully');
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-40 my-8 p-6 bg-white rounded-lg shadow-lg">
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
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
              {product.id ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>

      {products && products.length > 0 && (
        <div className="flex items-center grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-sm mb-10 ml-10 rounded overflow-hidden transition duration-300 ease-in-out shadow-lg bg-white hover:shadow-black transform hover:scale-105"
            >
              <img
                className="w-full h-100 object-cover"
                src={product.image ? product.image : ''}
                alt="Product"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-gray-900 mt-4">Rs {product.price}</p>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product.id)}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
