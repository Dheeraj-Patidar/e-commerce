
import React, { useEffect, useState } from 'react'
import products from '../utils/Products'
import Card from './Card'
import { useSelector } from 'react-redux'

export default function ProductList() {
   
  const product=useSelector((state)=>state.addproduct.products)
  const search=useSelector((state)=>state.search.search);
  const allProducts=products.concat(product);
  console.log(allProducts)
  const [debounceSearch,setDebounceSearch]=useState(search);
  
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebounceSearch(search);
    },1000);
    return ()=>clearTimeout(timer);
  },[search])


  const filteredProducts = allProducts.filter((product) => {
    const regex = new RegExp(`${debounceSearch.toLowerCase()}`, 'i');
    return regex.test(product.title);
  });

  return (
    <>
    {!search ?(
    <div className='w-100% grid grid-cols-3 ml-10 mt-20 p-2 '>

     { allProducts.map((product)=>(
      <Card key={product.id} product={product}/>
      ))
    }
    </div>):(

    <div className='w-100% grid grid-cols-3 ml-20 mt-20 p-4 '>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    )
}

    
      </>
  )

}

