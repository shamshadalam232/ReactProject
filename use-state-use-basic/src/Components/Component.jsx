import React, { useState } from 'react'
import "../App.css"

export default function Component() {

    const [name, setname] = useState("shamshad")

    const handleClicked = () => {
       setname("irshad")
    }
  return (
    <div>
        <h1>hello {name}</h1>
        <button onClick={handleClicked}>change</button>
    </div>
  )
}
