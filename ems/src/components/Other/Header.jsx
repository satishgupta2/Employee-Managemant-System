import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl'>Hello <br /> <span className='text-4xl font-semibold'>Satish</span></h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-3 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header