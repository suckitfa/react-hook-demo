import React,{useState} from 'react'
export default function Button() {
	const [buttonText,setButtonText] = useState('clicked me')
	const handleButtonClick = () => setButtonText('button clicked!')
	return <button onClick={handleButtonClick}>{buttonText}</button>
}