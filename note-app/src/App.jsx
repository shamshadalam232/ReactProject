import { useState } from 'react'
import './App.css'

function App() {

  const [title, settitle] = useState("")
  const [detail, setdetail] = useState("")

  const [task, settask] = useState([])

  const submitHandle = (e) => {
      e.preventDefault()

      const copyTask = [...task]
      copyTask.push({title,detail})
      console.log(copyTask)
      settask(copyTask)

      settitle('')
      setdetail('')
  }

  const deleteNote = (idx) => {
       const copyTask =[...task]

       copyTask.splice(idx,1)

       settask(copyTask)
  }
  

  return (
    <>
    <div>
      <form onSubmit={(e) => {
        submitHandle(e)
      }}>
      <input className='input1' placeholder='Enter Your Title' value={title} onChange={(e) => {
        settitle(e.target.value)
      }}/>
      <input className='input2' placeholder='Enter Full Detail' value={detail} onChange={(e) => {
        setdetail(e.target.value)
      }}/>
      <button className='button'>Submit</button>
      </form>

     <div className='notesContainer'>
      {task.map(function (e , idx){
        return(
        <div className='main' key={idx}>
        <img src='https://w7.pngwing.com/pngs/241/76/png-transparent-ruled-paper-post-it-note-notebook-notes-miscellaneous-text-rectangle-thumbnail.png' alt='photo' className='image'/>
        <div className='content'>
        <h1 className='title'>{e.title}</h1>
        <p className='paragraph'>{e.detail}</p>
        <button className='button2' onClick={() => {
          deleteNote(idx)
        }}>DELETE</button>
        </div>
      </div>
        )
      })}

     </div>
    </div>
    </>
  )
}

export default App
