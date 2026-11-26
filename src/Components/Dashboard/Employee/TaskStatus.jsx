import React from 'react'

const TaskStatus = ({userData}) => {
  return (
    <div className='mt-5'>
        <div className='flex gap-5 p-5 h-full justify-start text-white'>
            <div className='bg-[#1C1F2A] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35)]  w-1/3 rounded-4xl py-3 px-5'>
                <div className='flex justify-between mb-5'>
                    <h1 className='text-[10px] text-[#C7C4D7] px-2 py-1 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>NEW TASK</h1>
                    <h1>icon</h1>
                </div>
                <h1 className='text-4xl mb-5 text-blue-600'>{userData.taskNumbers.newTask}</h1>
            </div>
            <div className='bg-[#1C1F2A] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35)]  w-1/3 rounded-4xl py-3 px-5'>
                <div className='flex justify-between  mb-5'>
                    <h1 className='text-[10px] text-[#C7C4D7] px-2 py-1 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>ACTIVE TASK</h1>
                    <h1>icon</h1>
                </div>
                <h1 className='text-4xl mb-5 text-amber-300'>{userData.taskNumbers.active}</h1>
            </div>
           <div className='bg-[#1C1F2A] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35)]  w-1/3 rounded-4xl py-3 px-5'>
                <div className='flex justify-between mb-5'>
                    <h1 className='text-[10px] text-[#C7C4D7] px-2 py-1 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>COMPLETED TASK</h1>
                    <h1>icon</h1>
                </div>
                <h1 className='text-4xl mb-5 text-green-500'>{userData.taskNumbers.completed}</h1>
            </div>
           <div className='bg-[#1C1F2A] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35)]  w-1/3 rounded-4xl py-3 px-5'>
                <div className='flex justify-between mb-5'>
                    <h1 className='text-[10px] text-[#C7C4D7] px-2 py-1 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>FAILED TASK</h1>
                    <h1>icon</h1>
                </div>
                <h1 className='text-4xl mb-5 text-red-500'>{userData.taskNumbers.failed}</h1>
            </div>
        </div>
    </div>
  )
}

export default TaskStatus