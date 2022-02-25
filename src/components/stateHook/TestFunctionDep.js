import React from 'react'
import { useState,useEffect,useCallback } from 'react'
export default function TestFunctionDep() {
    const [count,setCount] = useState(0)
    const getData = () => useCallback(() => {
        return window.localStorage.getItem('token')
    },[]);
    // const getData = () => window.localStorage.getItem('token')
    // const [dep,setDep] = useState(getData())
    useEffect(() => {
        setCount(count + 1)
    },[getData])
  return (
      <div>
          <h1>Hello CodeSandbox</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
  )
}


