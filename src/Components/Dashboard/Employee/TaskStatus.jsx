import React from 'react'
import { CirclePlus, Clock4, CircleCheckBig, TriangleExclamationPoint } from 'lucide-react';
const TaskStatus = ({ userData }) => {
    return (
        <div className='mt-5'>
            <div className='flex gap-5 p-5 h-full justify-start text-white'>
                <div className='bg-[#171B26] shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)]  w-1/3 rounded-4xl py-3 px-5'>
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-[10px] text-[#C0C1FF] p-2 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>NEW TASK</h1>
                        <div className='shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] p-2 rounded-2xl bg-[#262A35]'>
                            <CirclePlus color='#C0C1FF' size={15} />
                        </div>
                    </div>
                    <h1 className='text-4xl mb-5 text-[#DFE2F1]'>{userData.taskNumbers.newTask}</h1>
                </div>
                <div className='bg-[#171B26] shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)]  w-1/3 rounded-4xl py-3 px-5'>
                    <div className='flex justify-between  mb-5'>
                        <h1 className='text-[10px] text-[#4CD7F6] p-2 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>ACTIVE TASK</h1>
                        <div className='shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] p-2 rounded-2xl bg-[#262A35]'>
                            <Clock4 color='#4CD7F6' size={15}/>
                        </div>
                    </div>
                    <h1 className='text-4xl mb-5 text-[#DFE2F1]'>{userData.taskNumbers.active}</h1>
                </div>
                <div className='bg-[#171B26] shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)]  w-1/3 rounded-4xl py-3 px-5'>
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-[10px] text-[#4EDEA3] p-2 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>COMPLETED TASK</h1>
                        <div className='shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] p-2 rounded-2xl bg-[#262A35]'>
                            <CircleCheckBig color='#4EDEA3' size={15}/>
                        </div>
                    </div>
                    <h1 className='text-4xl mb-5 text-[#DFE2F1]'>{userData.taskNumbers.completed}</h1>
                </div>
                <div className='bg-[#171B26] shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)]     w-1/3 rounded-4xl py-3 px-5'>
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-[10px] text-[#FFB4AB] p-2 rounded-2xl bg-[#0A0E18] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35),0px_1px_1px_rgba(144,143,160,0.35)]'>FAILED TASK</h1>
                        <div className='shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] p-2 rounded-2xl bg-[#262A35]'>
                            <TriangleExclamationPoint color='#FFB4AB' size={15}/>
                        </div>
                    </div>
                    <h1 className='text-4xl mb-5 text-[#DFE2F1]'>{userData.taskNumbers.failed}</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskStatus