import React, { useEffect } from 'react'
import { useState } from 'react'

const AdminTaskCreater = ({ setData, data }) => {

    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [userId, setUserId] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const userTask = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: taskTitle,
            taskDescription: description,
            taskDate: date,
            category: category
        }

        const updatedData = data.map((elem) => {
            if (elem.id == userId) {
                return {
                    ...elem,
                    task: [...elem.task, userTask],
                    taskNumbers: {
                        ...elem.taskNumbers,
                        newTask: elem.taskNumbers.newTask + 1
                    }
                }
            }

            return elem
        })

        setData(updatedData)

        localStorage.setItem(
            'employee',
            JSON.stringify(updatedData)
        )

        setTaskTitle('')
        setDate('')
        setUserId('')
        setCategory('')
        setDescription('')
    }

    return (
        <div className='mt-5 w-1/2'>
            
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='bg-[#171B26] p-8 rounded-3xl shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)]'>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <h2 className='text-[12px] text-[#DFE2F1]'>Task Title</h2>
                            <input
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                value={taskTitle}
                                required
                                className=' w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] px-5.5 py-3 outline-none rounded-3xl text-[#464554]'
                                type="text" 
                                placeholder='eg: Make a UI desing' />
                        </div>
                        <div>
                            <h2>Date</h2>
                            <input
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                value={date}
                                required
                               className=' w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] px-5.5 py-3 outline-none rounded-3xl text-[#464554]' 
                               type="date" />
                        </div>
                        <div>
                            <h2>Asing To</h2>
                            <input
                                onChange={(e) => {
                                    setUserId(e.target.value)
                                }}
                                value={userId}
                                required
                                className=' w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] px-5.5 py-3 outline-none rounded-3xl text-[#464554]' 
                                type="number" placeholder='employee Id' />
                        </div>
                        <div>
                            <h2>Category</h2>
                            <input
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                value={category}
                                required
                                className=' w-full bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] px-5.5 py-3 outline-none rounded-3xl text-[#464554]' 
                                type="text" placeholder='eg: Design, dev, etc' />
                        </div>
                    </div>
                    
                        <div className='w-full'>
                            <h2>Description</h2>
                            <textarea
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                value={description}
                                placeholder='Provide detailed instructions, acceptance criteria, Figma links, or API contract specifications...'
                                className=' w-full scrollbar-none bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] px-5.5 py-3 outline-none rounded-3xl text-[#464554]'>
                                </textarea>
                        </div>
                        <button type="submit" className='bg-[#00A572] mt-5 shadow-[0px_12px_24px_-4px_rgba(78,222,163,0.35)] rounded-3xl w-full px-8 py-5 active:scale-95 text-[#003824]'>+ Create & Assign Task</button>
                    
                </form>
            
        </div>
    )
}

export default AdminTaskCreater