import React, { useEffect } from 'react'
import { useState } from 'react'

const AllTask = ({ data }) => {
    
    return (
        <div className='m-5'>
            <div>
                <div className='flex bg-green-950 px-3 py-2 rounded'>
                    <h1 className='w-1/5 flex justify-center font-bold text-gray-200'>Name</h1>
                    <h1 className='w-1/5 flex justify-center font-bold text-gray-200'>New Task</h1>
                    <h1 className='w-1/5 flex justify-center font-bold text-gray-200'>active</h1>
                    <h1 className='w-1/5 flex justify-center font-bold text-gray-200'>Completed</h1>
                    <h1 className='w-1/5 flex justify-center font-bold text-gray-200'>Failed</h1>
                </div>
            </div>
            <div id='user-task' className='mt-5 h-40 flex flex-col gap-2 overflow-y-auto'>
                {data.map((elem, key) => {
                    return <div key={key} className='flex border-2 border-green-900 px-3 py-2 rounded'>
                        <h1 className='w-1/5 flex justify-center font-bold text-gray-200'>{elem.name}</h1>
                        <h1 className='w-1/5 flex justify-center font-bold text-green-300'>{elem.taskNumbers.newTask}</h1>
                        <h1 className='w-1/5 flex justify-center font-bold text-purple-800'>{elem.taskNumbers.active}</h1>
                        <h1 className='w-1/5 flex justify-center font-bold text-blue-700'>{elem.taskNumbers.completed}</h1>
                        <h1 className='w-1/5 flex justify-center font-bold text-red-600'>{elem.taskNumbers.failed}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask