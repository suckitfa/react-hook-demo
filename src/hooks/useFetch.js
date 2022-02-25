import {useState,useEffect} from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(url)
        setData(result.data)
        }
        fetchData()
    },[])
    return data
}