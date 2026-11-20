import React, { useEffect } from 'react'
import { useState } from 'react'

const AdminTaskCreater = () => {
    const data = JSON.parse(localStorage.getItem('employee'))

    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [userName, setUserName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [userTask, setUserTask] = useState('')

    useEffect(() => {
        setUserTask({
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: taskTitle,
            taskDescription: description,
            taskDate: date,
            category: category
        })
    }, [taskTitle, description, date, category, userName])

    const submitHandler = (e) => {
        e.preventDefault()

        data.forEach((elem) => {
            if (elem.name == userName) {
                elem.task.push(userTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
                localStorage.setItem('employee', JSON.stringify(data))
            }
        });

        // setTaskTitle('')
        // setDate('')
        // setUserName('')
        // setCategory('')
        // setDescription('')
    }

    return (
        <div className='mt-5'>
            <div className='p-5'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='bg-[#222223] flex justify-between p-5 rounded gap-80'>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <div>
                            <h2>Task Title</h2>
                            <input
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                value={taskTitle}
                                className=' w-full border border-white px-2 py-1 outline-none rounded ' type="text" placeholder='Make a UI desing' />
                        </div>
                        <div>
                            <h2>Date</h2>
                            <input
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                value={date}
                                className=' w-full border border-white px-2 py-1 outline-none rounded ' type="date" />
                        </div>
                        <div>
                            <h2>Asing To</h2>
                            <input
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                                value={userName}
                                className=' w-full border border-white px-2 py-1 outline-none rounded ' type="text" placeholder='employee Name' />
                        </div>
                        <div>
                            <h2>Category</h2>
                            <input
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                value={category}
                                className=' w-full border border-white px-2 py-1 outline-none rounded ' type="text" placeholder='Desing, dev, etc' />
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <div className='w-full'>
                            <h2>Description</h2>
                            <textarea
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                value={description}
                                className='rounded w-full h-50 border border-white px-2 py-1 '></textarea>
                        </div>
                        <button type="submit" className='bg-green-400 rounded w-full px-3 py-2 active:scale-95'>Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminTaskCreater