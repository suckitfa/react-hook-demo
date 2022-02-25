import React,{useState} from 'react'
import TestEffect from './components/effect/index'
import TestDataFetch from './components/effect/TestDataFetch'
import Button from './components/stateHook/Button'
import TestFunctionDep from './components/stateHook/TestFunctionDep'
let count = 0
export default function App() {
  const [name, setName] = useState('world')
  const handleClick = () => { 
    setName('world' + count++)
  }

  return (
      <div>
        {/* <button onClick={handleClick}>点我</button> */}
        {/* <TestEffect name={name}/>
        <TestDataFetch /> */}
        {/* <Button name="Bob"/> */}
        <TestFunctionDep />
      </div>
  )
}
