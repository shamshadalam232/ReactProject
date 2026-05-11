import React from 'react'
import "../App.css"
import { useState } from 'react'

export default function Component() {

  const [Increment, setIncrement] = useState(1)
  

  const increment = () => {
    setIncrement(Increment+1)
  }

  const decrement = () => {
    setIncrement(Increment-1)
  }
  return (
    <div>
      <h1>{Increment}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
