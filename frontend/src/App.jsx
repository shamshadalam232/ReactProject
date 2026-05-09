import React from 'react'
import Card from './Components/Card'
import './App.css'

const jobsData = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png",
    companyName: "TCS",
    posted: "5 days ago",
    role: "Full Stack Developer",
    level: "Senior Level",
    type: "Full Time",
    salary: "₹12 LPA",
    location: "Mumbai, India"
  },
  {
    id: 2,
    image: "data:image/png;base64,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",
    companyName: "Infosys",
    posted: "2 days ago",
    role: "MERN Stack Developer",
    level: "Mid Level",
    type: "Part Time",
    salary: "₹8 LPA",
    location: "Bangal, India"
  },
  {
    id: 3,
    image: "data:image/png;base64,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",
    companyName: "Wipro",
    posted: "1 week ago",
    role: "React Developer",
    level: "Junior Level",
    type: "Internship",
    salary: "₹25,000/month",
    location: "Delhi, India"
  },
  {
    id: 4,
    image: "data:image/png;base64,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",
    companyName: "Accenture",
    posted: "3 days ago",
    role: "Backend Developer",
    level: "Senior Level",
    type: "Full Time",
    salary: "₹15 LPA",
    location: "Hyderabad, India"
  },
  {
    id: 5,
    image: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    posted: "6 days ago",
    role: "Node.js Developer",
    level: "Mid Level",
    type: "Remote",
    salary: "₹10 LPA",
    location: "Pune, India"
  },
  {
    id: 6,
    image: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    posted: "4 days ago",
    role: "Frontend Developer",
    level: "Junior Level",
    type: "Part Time",
    salary: "₹6 LPA",
    location: "Chennai, India"
  },
  {
    id: 7,
    image: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    posted: "2 weeks ago",
    role: "Java Full Stack Developer",
    level: "Senior Level",
    type: "Full Time",
    salary: "₹18 LPA",
    location: "Noida, India"
  },
  {
    id: 8,
    image: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    posted: "1 day ago",
    role: "MERN Stack Engineer",
    level: "Fresher",
    type: "Internship",
    salary: "₹20,000/month",
    location: "Kolkata, India"
  },
  {
    id: 9,
    image: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    posted: "5 hours ago",
    role: "Software Engineer",
    level: "Mid Level",
    type: "Remote",
    salary: "₹14 LPA",
    location: "Ahmedabad, India"
  },
  {
    id: 10,
    image: "https://logo.clearbit.com/paytm.com",
    companyName: "Paytm",
    posted: "3 weeks ago",
    role: "Full Stack MERN Developer",
    level: "Senior Level",
    type: "Full Time",
    salary: "₹20 LPA",
    location: "Mumbai, India"
  }
];

export default function 
() {
  return (
    <div className='parent'>
      {
        jobsData.map((job) => (
          <Card key={job.id} job={job} />
        ))
      }
    </div>
  )
}
