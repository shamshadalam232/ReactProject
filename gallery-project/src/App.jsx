import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  
  const [userData, setUserData] = useState([])

  const getData = async() => {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=2&limit=100`)
    console.log(responce.data)
  }

  return (
    <>
      <button onClick={getData}>submit</button>
    </>
  )
}

export default App
