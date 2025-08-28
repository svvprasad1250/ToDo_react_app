import React, { useState } from 'react'
import './assets/App.css'
import Task from './components/task'

function App() {
  const [data,setData] = useState('')
  const [mytask,setMytask] = useState([])
  const [completedtask,setCompletedTask] = useState([])
  const handleInput=(e)=>{
    setData(e)
  }
  const handleClick=()=>{
    if(!data.trim()){
      return alert('enter task')
    }
    else{
      setMytask(prev=>[...prev,data])
      setData('')
    }
  }
  const deleteTask=(taskName)=>{
    let afterDeletion = mytask.filter(task=>task!=taskName)
    setMytask(afterDeletion);
  }
  const completeTask=(taskName)=>{
    let completionTask = mytask.filter(task=>task==taskName)
    let afterCompletion = mytask.filter(task=>task!=taskName)
    setMytask(afterCompletion);
    setCompletedTask(prev=>[...prev,completionTask[0]])
  }
  return (
    <>
    <div className="main-body d-flex justify-content-center align-items-center">
      <div className="todo-list-box">
        <h3>My To-Do List</h3>
        <div>
          <div className='todo-task-input'>
            <div className="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" placeholder="ToDo Task" onChange={(e)=>(handleInput(e.target.value))} value={data}/>
              <label htmlFor="floatingInput">Enter Task</label>
            </div>
            <button className='btn btn-primary' id='buttonAdd' onClick={()=>{handleClick()}}>+</button>
          </div>

          <h5>To Do Tasks</h5>
          <ul className='task-list'>
            {
              mytask.map((task,index)=>
                <Task newTask={task} deleteBtn={deleteTask} completeTask={completeTask} key={index}/>
              )
            }
          </ul>
          <h5>Completed Tasks</h5>
          <ul className='task-list'>
            {
              completedtask.map((task,index)=>
                <Task newTask={task} deleteBtn={deleteTask} completeTask={completeTask} key={index}/>
              )
            }
          </ul>


        </div>
      </div>
    </div>
    </>
  )
}

export default App
