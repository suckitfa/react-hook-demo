import React, { useState,useEffect } from 'react'

export default function TestEffect() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect, clicked ${count} times!`)
    })
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => {setCount(count+1)}}>click me</button>
    </div>
  )
}
