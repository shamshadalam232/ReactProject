import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  
  const [userData, setUserData] = useState([])

  const [index, setindex] = useState(1)

  const getData = async() => {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(responce.data)
  }

  let printUserData = <h1 className='loading'>Loading...</h1>

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx) {
        return <div key={idx}>
        <img src={elem.download_url} alt='photo'className='image'/>
        <h3>{elem.author}</h3>
        </div>
    })
  }

  useEffect(function(){
    getData()
  }, [index])


  return (
    <>
    <div>
      <div className='main'>
        {printUserData}
      </div>
      <div className='buttonDiv'>
        <button className='button' onClick={function() {
          setindex(index-1)
          setUserData([])
        }}>Prev</button>
        <button className='button'>{index}</button>
        <button className='button' onClick={function(){
          setindex(index+1)
          setUserData([])
        }}>Next</button>
      </div>
    </div>
      
    </>
  )
}

export default App
