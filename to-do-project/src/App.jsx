import React, { useState } from 'react'
import "./App.css"
import { FileXCorner, Pencil } from 'lucide-react';

export default function App() {
  const [work, setwork] = useState("")

  const [task, settask] = useState([])

  const [edit, setedit] = useState(null)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const copytask = [...task]

    if(edit !== null){
      copytask[edit] = {work}
      settask(copytask)
      setedit(null)
    } else {
      copytask.push({work, completed:false})
      settask(copytask)
    }
    setwork('')
    
  }

  const deleteTask = (e, idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    settask(copyTask)
  }

  const toggleCompleted = (idx) => {

    const copyTask = [...task]

    copyTask[idx].completed =! copyTask[idx].completed

    settask(copyTask)
  }

  const completedTask = task.filter((e) => {
    return e.completed
  })


  return (
    <div className='all'>
      <div className="first">
        <h1>To Do List</h1>
      </div>
      <div className="second">
        <form onSubmit={(e) => {
          handleSubmit(e)
        }}>
        <input type='text' placeholder='Enter Your Today List' className='input' value={work} onChange={(e) => {
          setwork(e.target.value)
        }}/>
        <button className='button'>add</button> 
        </form>
      </div>
      <div>
        <h1>Task List</h1>
      </div>
      {task.map(function (e, idx){
        return (
          <div>
          <div className='paragraph' key={idx}>
            <input type='checkbox' checked={e.completed} onChange={() => {
             toggleCompleted(idx)
            }}/>
            <p style={{textDecoration: e.completed ? "line-through" : "none"}}>{e.work}</p>
                <FileXCorner className='filexcorner' onClick={() => {
                  deleteTask(idx)
                }}/>
                <Pencil className='Pencil' onClick={() => {
                  setwork(e.work)
                  setedit(idx)
                }}/>
        </div>
        
        </div>
          
        )
      })}

      <h2>Completed: {completedTask.length}</h2>
      <h2>Uncompleted: {task.length - completedTask.length}</h2>
    </div>
    
  )
}
