import React from 'react'
import ActiveTask from '../../TaskList/ActiveTask'
import NewTask from '../../TaskList/NewTask'
import CompletedTask from '../../TaskList/CompletedTask'
import Failed from '../../TaskList/Failed'

const TaskCard = ({ userData }) => {
    console.log(userData)
    return (
        <div className='mt-5'>
            <div id='task-card' className='p-5 flex gap-5 flex-nowrap overflow-x-auto '>

                {userData.task.map((elem) => {
                    if (elem.newTask) {
                        return <NewTask elem={elem} />
                    }
                    if (elem.active) {
                        return <ActiveTask elem={elem} />
                    }
                    if (elem.completed) {
                        return <CompletedTask elem={elem} />
                    }
                    if (elem.failed) {
                        return <Failed elem={elem} />
                    }
                })}


                {/* <NewTask />
                <ActiveTask />
                <CompletedTask />
                <Failed /> */}
            </div>
        </div>
    )
}

export default TaskCard