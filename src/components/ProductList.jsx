import React, { useEffect, useState } from 'react'
import products from '../utils/Products'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { filterprice ,filtercategory} from '../redux/FilterSlice'

export default function ProductList() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.addproduct.products)
  const search = useSelector((state) => state.search.search)
  const allProducts = products.concat(product)
  
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [debounceSearch, setDebounceSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);
 
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    const [min, max] = event.target.value.split('-').map(Number);
    dispatch(filterprice({ min, max }));
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    dispatch(filtercategory(event.target.value));
  }
  const filteredProducts = allProducts.filter((product) => {
    const regex = new RegExp(debounceSearch.toLowerCase(), 'i');
    
    const matchesSearch = regex.test(product.title);
    
    const priceMatch = selectedPrice 
      ? product.price >= parseInt(selectedPrice.split('-')[0]) && product.price <= Number(selectedPrice.split('-')[1])
      : true;
    const categoryMatch = selectedCategory ? product.title === selectedCategory : true;
    return matchesSearch && priceMatch && categoryMatch;
  });

  return (
    <>
      <div>
        <div className='flex mt-10 ml-20'>
          <h1 className='text-2xl font-bold'>Filter Products</h1>
          <div>
          <select 
            name="price" 
            id="price" 
            value={selectedPrice} 
            onChange={handlePriceChange}
            className='ml-4 p-2'>
            <option value="">Price</option>
            <option value="100-500">100-500</option>
            <option value="600-1000">600-1000</option>
            <option value="1100-2000">1100-2000</option>
            <option value="2100-5000">2100-5000</option>
          </select>
          </div>
          <select 
            name="category" 
            id="category" 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className='ml-4 p-2'>
            <option value="">Category</option>
            <option value="Casual Shirt">Casual Shirt</option>
            <option value="Denim Jeans">Denim Jeans</option>
            <option value="Leather Jacket">Leather Jacket</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Handbag">Handbag</option>
            <option value="Sneakers">Sneakers</option>
          </select>
        </div>
      </div>

      <div className='w-100% grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-20 p-2'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  )
}
