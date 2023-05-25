import { ShoppingBagOutlined } from '@mui/icons-material'
import React from 'react'

const CartButton = () => {
  return (
    <React.Fragment>
      <div className='flex items-center justify-center'>
        <span className='md:hidden flex text-sm items-center justify-center h-5 w-5 relative bottom-4 left-14 bg-blue-600 rounded-full text-gray-50 flex-shrink-0'>4</span>
        <button type='button' className='gap-4 p-3 lg:px-6 shadow-md rounded-full md:rounded-xl bg-sky-200 flex items-center justify-center'>
            <span className='text-md font-semibold hidden md:flex flex-shrink-0'>My Cart</span>
            <span className='h-6 w-6 hidden md:flex items-center justify-center bg-blue-600 rounded-full text-gray-50 flex-shrink-0'>4</span>
            <span className='md:hidden'><ShoppingBagOutlined className='h-8 w-8'/></span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default CartButton
