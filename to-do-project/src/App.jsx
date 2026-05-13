import React from 'react'

export default function App() {
  return (
    <div className='all'>
      <div className="first">
        <h1>To Do List</h1>
      </div>
      <div className="second">
        <form>
        <input type='text' placeholder='Enter Your Today List' className='input'/>
        <button className='button'>add</button> 
        </form>
      </div>
    </div>
    
  )
}
