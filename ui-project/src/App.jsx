import React from 'react'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import "./App.css"

const cardData = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/e7/e1/4f/e7e14f2c45c23f67350742c2037ebc28.jpg",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ekaur: "Underserved"
  },

  {
    id: 2,
    image: "https://i.pinimg.com/736x/47/66/5b/47665b542e7f8b341b4dea3aed0681e5.jpg",
    paragraph: "Underserved market audience with high growth potential.",
    ekaur: "Target"
  },

  {
    id: 3,
    image: "https://i.pinimg.com/736x/16/35/2b/16352b1b70d94f7da4aca0764a6c099a.jpg",
    paragraph: "Target customers interested in premium services.",
    ekaur: "Normal"
  }
];

export default function App() {
  return (
    <div className='section'>
      <Section1 />
      <Section2  data={cardData} />
    </div>
  )
}
