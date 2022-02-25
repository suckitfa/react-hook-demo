import React,{useState} from 'react'

export default function Button() {
    const [buttonText,setButtonText] = useState('Click Me');
    const handleClick = () => {
        setButtonText('Clicked');
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
    )
}
