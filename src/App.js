import React,{useState} from 'react'
import TestEffect from './components/effect/index'
import TestDataFetch from './components/effect/TestDataFetch'
let count = 0
export default function App() {
  const [name, setName] = useState('world')
  const handleClick = () => { 
    setName('world' + count++)
  }

  return (
      <div>
        <button onClick={handleClick}>点我</button>
        <TestEffect name={name}/>
        <TestDataFetch />
      </div>
  )
}
