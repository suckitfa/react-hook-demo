import React,{useState} from 'react'

export default function StateSeq() {
    const [sex,setSex] = useState('男')
    const [age,setAge] = useState(10)
    // if(sex) {
    //     const [age, setAge] = React.useState(0)
    // }
    const [work,setWork] = useState('前端程序员')
  return (
      <div>
          <div>{age}</div>
          <div>{sex}</div>
          <div>{work}</div>
      </div>
  )
}
