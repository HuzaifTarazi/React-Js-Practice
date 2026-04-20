import React from 'react'
import { Outlet } from 'react-router'

const ProductLayout = () => {
  return (
    <div  className='flex flex-col justify-center items-center h-66'>
        <input type="text" placeholder='Search Product...' className='border w-1/2 p-1 rounded my-10' />
        <Outlet/>
    </div>
  )
}

export default ProductLayout