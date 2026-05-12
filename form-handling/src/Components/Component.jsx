import React, { useState } from 'react'

export default function Component() {

    const [name, setname] = useState("")
    const [submittedName, setsubmittedName] = useState([])

    const onClick = (e) => {
        e.preventDefault()
        const copyTask = [...submittedName]
        copyTask.push(name)
        setsubmittedName(copyTask)
        console.log(name)
        setname('')
    }
  return (
    <div>
        <form onSubmit={(e) => {
            onClick(e)
        }}>
            <input type='text' placeholder='Enter Your Name' value={name} onChange={(e) => {
                setname(e.target.value)
            }}/>
            <button>Submit</button>
        </form>
         <h1>{submittedName}</h1>
    </div>
  )
}
