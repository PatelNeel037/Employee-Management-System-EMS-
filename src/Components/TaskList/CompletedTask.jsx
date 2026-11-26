import React from 'react'

const CompletedTask = ({elem}) => {
    return (
        <div className='relative bg-[#1C1F2A] transition-transform  hover:-translate-y-3 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35)] h-90  shrink-0 p-5 rounded-2xl text-white'>
            <div className='flex justify-between gap-25'>
                <h1 className='bg-[#1C1F2A] text-xs px-2 py-1 text-[#C7C4D7] hover:text-[#C0C1FF] shadow-[inset_1px_1px_3px_rgba(255,255,255,0.35),inset_-1px_-1px_3px_rgba(0,0,0,0.35)]  rounded-4xl'>{elem.category}</h1>
                <h1 className='bg-[#0A0E18] text-xs hover:text-[#4CD7F6] px-2 py-1 rounded-2xl shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)] text-[#908FA0]'>{elem.taskDate}</h1>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl font-bold'>{elem.taskTitle}</h1>
                <h1 className='text-sm mt-2'>{elem.taskDescription}</h1>
            </div>
            <div className='mt-4 w-full absolute bottom-10 left-0'>
                <div className='mx-4'>
                <button className='px-2 py-1 bg-blue-600 shadow-[inset_1px_1px_15px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35),4px_4px_5px_rgba(0,0,0,0.35)] rounded-2xl w-full'>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default CompletedTask