import React from 'react'

const NewTask = ({ elem, idx, userId, setUserData }) => {

    const data = JSON.parse(localStorage.getItem('employee'))
    const user = JSON.parse(localStorage.getItem('user'))
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
                <button
                    onClick={(e) => {
                        data.forEach((node) => {
                            if (node.id == userId) {
                                node.task[idx].newTask = false;
                                node.task[idx].active = true;
                            }
                        });
                        const setNewTask = {
                            ...user,
                            task: user.task.map((n, index) => {

                                if (idx == index) {
                                    return {
                                        ...n,
                                        active: true,
                                        newTask: false
                                    }
                                }
                                return n

                            })
                        }
                        setUserData(setNewTask)
                        localStorage.setItem('user', JSON.stringify(setNewTask))
                        localStorage.setItem('employee', JSON.stringify(data))
                    }}
                    className='bg-green-700 w-full px-2 py-1 rounded-2xl cursor-pointer active:scale-90'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask