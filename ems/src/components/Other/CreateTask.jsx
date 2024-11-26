import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] rounded mt-5'>
    <form className='flex flex-wrap w-full items-start justify-between' action="">
        <div className='w-1/2'>
            <div>  <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='make ui design' /></div>
            <div className='text-sm text-gray-300 mb-0.5'><h3>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" /></div>
            <div>
                <h3> Asign to </h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="" id="" />
            </div>

            <div>
                <h3>Category</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev,etc' />
            </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-x-gray-400' name="" id="" cols="30" rows="10"></textarea>

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task </button></div>
    </form>
</div>
  )
}

export default CreateTask