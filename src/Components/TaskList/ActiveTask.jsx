import React from 'react'

const ActiveTask = ({ elem, idx, setUserData }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const data = JSON.parse(localStorage.getItem('employee'))
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
            <div className='mt-4 w-full flex justify-around items-center gap-3 absolute bottom-10 left-0 px-3'>
                <button
                    onClick={(e) => {
                        const setCompletedTask = {
                            ...user,
                            task: user.task.map((n, index) => {
                                if (index == idx) {
                                    return {
                                        ...n,
                                        active: false,
                                        completed: true
                                    }
                                }
                                return n
                            }),
                            taskNumbers: {
                                ...user.taskNumbers,
                                active: user.taskNumbers.active - 1,
                                completed: user.taskNumbers.completed + 1
                            }
                        }
                        
                        data.forEach((node) => {
                            if (node.id == setCompletedTask.id) {
                                node.task[idx].active = false
                                node.task[idx].completed = true
                                node.taskNumbers.active = node.taskNumbers.active - 1
                                node.taskNumbers.completed = node.taskNumbers.completed + 1
                            }
                        })
                        
                        setUserData(setCompletedTask)
                        localStorage.setItem('user', JSON.stringify(setCompletedTask))
                        localStorage.setItem('employee', JSON.stringify(data))
                    }}
                    className='bg-[#00A572] px-2 py-1 text-[#003824] text-sm font-medium shadow-[inset_1px_1px_15px_rgba(255,255,255,0.35),inset_-1px_-1px_5px_rgba(0,0,0,0.35),4px_5px_10px_rgba(100,100,255,0.35)] rounded-2xl cursor-pointer active:scale-90'>Mark As Completed</button>
                <button
                    onClick={(e) => {
                        const setFailedTask = {
                            ...user,
                            task:
                                user.task.map((n, index) => {
                                    if (index == idx) {
                                        return {
                                            ...n,
                                            active: false,
                                            failed: true
                                        }
                                    }
                                    return n
                                }),
                            taskNumbers: {
                                ...user.taskNumbers,
                                active: user.taskNumbers.active - 1,
                                failed: user.taskNumbers.failed + 1
                            }
                        }
                        
                        data.forEach((node) => {
                            if (node.id == setFailedTask.id) {
                                node.task[idx].active = false
                                node.task[idx].failed = true
                                node.taskNumbers.active = node.taskNumbers.active - 1
                                node.taskNumbers.failed = node.taskNumbers.failed + 1
                            }
                        });
                        
                        setUserData(setFailedTask)
                        localStorage.setItem('user', JSON.stringify(setFailedTask))
                        localStorage.setItem('employee', JSON.stringify(data))
                    }}
                    className='bg-red-600 px-2 py-1 text-[#003824] text-sm font-medium shadow-[inset_1px_1px_15px_rgba(255,255,255,0.35),inset_-1px_-1px_5px_rgba(0,0,0,0.35)] rounded-2xl cursor-pointer active:scale-90'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default ActiveTask