import React from 'react'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import "./App.css"

export default function App() {
  return (
    <div className='section'>
      <Section1 />
      <Section2 />
      <Section2 />
      <Section2 />
    </div>
  )
}
