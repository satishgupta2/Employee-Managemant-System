import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='flex items-center overflow-x-auto justify-start gap-5 h-[55%] w-full py-5 flex-nowrap mt-10 '>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl  '>
            <div className="flex justify-between items-center">
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High
                </h3>
                    <h4 className='text-sm'>20 nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, tempora provident incidunt tempore hic accusantium.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl  '>
            <div className="flex justify-between items-center">
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High
                </h3>
                    <h4 className='text-sm'>20 nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, tempora provident incidunt tempore hic accusantium.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl  '>
            <div className="flex justify-between items-center">
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High
                </h3>
                    <h4 className='text-sm'>20 nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, tempora provident incidunt tempore hic accusantium.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl  '>
            <div className="flex justify-between items-center">
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High
                </h3>
                    <h4 className='text-sm'>20 nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, tempora provident incidunt tempore hic accusantium.</p>
        </div>

    </div>
  )
}

export default TaskList