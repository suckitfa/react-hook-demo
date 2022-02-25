import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function TestDataFetch() {
    const [data,setData] = useState({hits:[]})
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios( 'https://hn.algolia.com/api/v1/search?query=redux')
            setData(result.data)
        }
        fetchData()
    },[])
  return (
      <ul>
          {
              data.hits.map(item=>(
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
              ))
          }
      </ul>
  )
}
