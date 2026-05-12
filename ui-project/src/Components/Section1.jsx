import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function Section1() {
  return (
    <div className='Section1'>
      <div className='target'>TARGET AUDIANCE</div>
      <div className="pros">
        <h1 className="h2">Procepective customer segmantation</h1>
        <p className='h2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam dolorem obcaecati autem fuga. Excepturi unde molestiae temporibus earum nostrum.</p>
      </div>
      <div className="arrow">
        <ArrowUpRight size={50}/>
      </div>
    </div>
  )
}
