import React from 'react'

function Task({newTask,deleteBtn,completeTask}) {
    return (
        <>
        <li className='task d-flex justify-content-between'>{newTask}
            <div className='task-buttons'>
                <button className='btn btn-success' onClick={()=>{completeTask(newTask)}}>complete</button>
                <button className='btn btn-danger' onClick={()=>{deleteBtn(newTask)}}>delete</button>
            </div>
        </li>
        </>
    )
}

export default Task
