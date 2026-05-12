import React from 'react'
import { Bookmark } from 'lucide-react'

export default function Card({job}) {
    console.log(job)
  return (
   <div className="card">
            <div>
                <div className="top">
                    <img src={job.image} alt="nachioooooo" />
                    <button>Save <Bookmark size={10} /> </button>
                </div>
                <div className="center">
                    <h3>{job.companyName} <span>{job.posted}</span></h3>
                    <h2>{job.role}</h2>
                    <div className='tag'>
                        <h4>{job.type}</h4>
                        <h4>{job.level}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{job.salary}</h3>
                    <p>{job.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
  )
}
