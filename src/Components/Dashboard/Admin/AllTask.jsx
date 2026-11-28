import React, { useEffect } from 'react'
import { useState } from 'react'

const AllTask = ({ data }) => {

    return (
        <div className='bg-[#171B26] scrollbar-none w-1/2 mt-5 px-8 py-5 rounded-3xl shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] h-142.25 overflow-hidden overflow-y-auto '>

            {data.map((elem, key) => {
                return <div key={key} className='bg-[#1C1F2A] mb-4 p-3 rounded-3xl shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)]'>
                    <div className='flex justify-between mb-3'>
                        <h1 className=' flex justify-center font-bold text-[#DFE2F1] text-[16px]'>{elem.name}</h1>
                        <h1 className=' shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] px-3 py-1 rounded-2xl bg-[#262A35] text-[#4CD7F6]'>ID:- {elem.id}</h1>
                    </div>
                    <div className='flex justify-between w-full gap-5'>
                        <div className='w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] p-1 rounded-2xl text-center'>
                            <h1 className='text-[#908FA0]'>NEW</h1>
                            <h1 className='text-[#C0C1FF]'>{elem.taskNumbers.newTask}</h1>
                        </div>
                        <div className='w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] p-1 rounded-2xl text-center'>
                            <h1 className='text-[#908FA0]'>ACTIVE</h1>
                            <h1 className='text-[#4CD7F6]'>{elem.taskNumbers.active}</h1>
                        </div>
                        <div className='w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] p-1 rounded-2xl text-center'>
                            <h1 className='text-[#908FA0]'>DONE</h1>
                            <h1 className='text-[#4EDEA3]'>{elem.taskNumbers.completed}</h1>
                        </div>
                        <div className='w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] p-1 rounded-2xl text-center'>
                            <h1 className='text-[#908FA0]'>FAIL</h1>
                            <h1 className='text-[#FFB4AB]'>{elem.taskNumbers.failed}</h1>
                        </div>
                    </div>
                </div>
            })}

        </div>
    )
}

export default AllTask