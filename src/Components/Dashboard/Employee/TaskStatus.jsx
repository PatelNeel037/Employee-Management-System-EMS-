import React from 'react'

const TaskStatus = ({userData}) => {
    console.log(userData)
  return (
    <div className='mt-5'>
        <div className='flex gap-5 p-5 h-37.5 justify-start text-white'>
            <div className='bg-blue-900  w-1/4 rounded-2xl py-3 px-5 flex items-center'>
                <h1><span className='text-3xl font-medium'>{userData.taskNumbers.newTask}</span> <br /> <span className='text-2xl'>New Task</span></h1>
            </div>
            <div className='bg-gray-700  w-1/4 rounded-2xl py-3 px-5 flex items-center'>
                <h1><span className='text-3xl font-medium'>{userData.taskNumbers.active}</span> <br /> <span className='text-2xl'>active</span></h1>
            </div>
            <div className='bg-green-900  w-1/4 rounded-2xl py-3 px-5 flex items-center'>
                <h1><span className='text-3xl font-medium'>{userData.taskNumbers.completed}</span> <br /> <span className='text-2xl'>completed</span></h1>
            </div>
            <div className='bg-red-900  w-1/4 rounded-2xl py-3 px-5 flex items-center'>
                <h1><span className='text-3xl font-medium'>{userData.taskNumbers.failed}</span> <br /> <span className='text-2xl'>failed</span></h1>
            </div>
        </div>
    </div>
  )
}

export default TaskStatus