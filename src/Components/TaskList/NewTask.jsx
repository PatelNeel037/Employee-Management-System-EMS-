import React from 'react'

const NewTask = ({elem}) => {
    console.log(elem)
    return (
        <div className='relative bg-blue-900 h-90 w-[24%] shrink-0 p-5 rounded-2xl text-white'>
            <div className='flex justify-between'>
                <h1 className='bg-gray-950 px-1  rounded'>{elem.category}</h1>
                <h1>{elem.taskDate}</h1>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl font-bold'>{elem.taskTitle}</h1>
                <h1 className='text-sm mt-2'>{elem.taskDescription}</h1>
            </div>
            <div className='mt-4 w-full absolute bottom-10 left-0'>
                <button className='bg-green-700 w-full px-2 py-1 rounded-2xl cursor-pointer active:scale-90'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask