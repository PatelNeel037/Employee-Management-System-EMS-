import React from 'react'

const ActiveTask = ({elem}) => {
    return (
        <div className='relative bg-gray-700 h-90 w-[24%] shrink-0 p-5 rounded-2xl text-white'>
            <div className='flex justify-between'>
                <h1 className='bg-gray-950 px-1  rounded'>{elem.category}</h1>
                <h1>{elem.taskDate}</h1>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl font-bold'>{elem.taskTitle}</h1>
                <h1 className='text-sm mt-2'>{elem.taskDescription}</h1>
            </div>
            <div className='mt-4 w-full flex justify-around items-center gap-3 absolute bottom-10 left-0'>
                <button 
                onClick={(e) => {
                    console.log('clicked')
                }}
                className='bg-lime-600 rounded-2xl active:scale-90 cursor-pointer px-2 py-1'>Mark As Completed</button>
                <button className='bg-red-600 rounded-2xl active:scale-90 cursor-pointer px-2 py-1'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default ActiveTask