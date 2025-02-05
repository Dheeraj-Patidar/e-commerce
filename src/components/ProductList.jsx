
import React from 'react'
import products from '../utils/Products'
import Card from './Card'


export default function ProductList() {
  return (
    <div className='w-full grid grid-cols-3 ml-20 mt-20 p-4 '>

     { products.map((product)=>(
      <Card key={product.id} product={product}/>
      ))
    }

    </div>
  )
}
