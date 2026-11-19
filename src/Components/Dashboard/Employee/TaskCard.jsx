import React from 'react'
import ActiveTask from '../../TaskList/ActiveTask'
import NewTask from '../../TaskList/NewTask'
import CompletedTask from '../../TaskList/CompletedTask'
import Failed from '../../TaskList/Failed'

const TaskCard = ({ userData }) => {
    return (
        <div className='mt-5'>
            <div id='task-card' className='p-5 flex gap-5 flex-nowrap overflow-x-auto '>

                {userData.task.map((elem, key) => {
                    if (elem.newTask) {
                        return <NewTask key={key} elem={elem} />
                    }
                    if (elem.active) {
                        return <ActiveTask key={key} elem={elem} />
                    }
                    if (elem.completed) {
                        return <CompletedTask key={key} elem={elem} />
                    }
                    if (elem.failed) {
                        return <Failed key={key} elem={elem} />
                    }
                })}
            </div>
        </div>
    )
}

export default TaskCard