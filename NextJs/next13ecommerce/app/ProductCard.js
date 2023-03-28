import React from 'react'
import Image from 'next/image'

export default function ProductCard(props) {
    const {product} = props
    const{id:price_id, unit_amount:cost,product:productInfo} = product
    const{name,description} = productInfo
  return (
    <div className='flex flex-col shadow bg-white hover:shadow-log cursor-point'>
        <img src = {productInfo.images[0]} alt={name} className="w-full h-full object-cover"/>
        <div className='flex flex-col gap-2 p-4'>
            <div className='flex ites-center justify-between'>
                <h3>{name}</h3>
                <p>${cost/100}</p>
            </div>
        </div>
    </div>
  )
}
