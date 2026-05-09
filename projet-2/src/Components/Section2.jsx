import React from 'react'
import { ArrowRight } from "lucide-react"



export default function Section2({data}) {
  return (
    <div className='Section2' >
     {data.map((item) =>(
      <div className='photo' key={item.id}>
      <img src={item.image} alt='ph' className='image'/>
      <h2>{item.id}</h2>
      <p>{item.paragraph}</p>
      <h3>{item.ekaur}</h3>
      <ArrowRight className='arrowsection'/>
      </div>
     ))}
    </div>
  )
}
