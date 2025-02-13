
import React, { useEffect, useState } from 'react'
import products from '../utils/Products'
import Card from './Card'
import { useSelector ,useDispatch} from 'react-redux'
import { filterprice } from '../redux/FilterSlice'


export default function ProductList() {
   
  const dispatch=useDispatch();

  const product=useSelector((state)=>state.addproduct.products)
  const search=useSelector((state)=>state.search.search);
  const allProducts=products.concat(product);
  const [selectedPrice, setSelectedPrice] = useState('');
  
  const [debounceSearch,setDebounceSearch]=useState(search);
  
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebounceSearch(search);
    },1000);
    return ()=>clearTimeout(timer);
  },[search])


  
    
    const handleChange = (event) => {
      setSelectedPrice(event.target.value);
      dispatch(filterprice(event.target.value));
    }


  const filteredProducts = allProducts.filter((product) => {
    const regex = new RegExp(`${debounceSearch.toLowerCase()}`, 'i');
    return regex.test(product.title);
  });

  return (
    <>
    <div>
    <div className='flex mt-10 ml-20'>
      <h1 className='text-2xl font-bold'>Filter Products</h1>
      <select 
        name="price" 
        id="price" 
        value={selectedPrice} 
        onChange={handleChange}
        className='ml-4 p-2'>
        <option value="100-500">100-500</option>
        <option value="600-1000">600-1000</option>
        <option value="1100-2000">1100-2000</option>
        <option value="2100-5000">2100-5000</option>
      </select>
    </div>
    </div>
    {!search ?(
    
    <div className='w-100% grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  mt-20 p-2 '>

     { allProducts.map((product)=>(
      <Card key={product.id} product={product}/>
      ))
    }
    </div>):(

    <div className='w-100% grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  mt-20 p-4'>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    )
}

    
      </>
  )

}

