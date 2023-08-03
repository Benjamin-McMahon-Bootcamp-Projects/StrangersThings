import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Posts({ baseUrl, setSelectedPost }) {

  const [ allPosts, setAllPosts ] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchAllPosts() {
      try{
 
        const response = await fetch(`${baseUrl}/posts`)
        const result = await response.json()
        setAllPosts(result.data.posts)
  
      }catch(err){
        console.log('Error fetching all posts')
      }
    }
    fetchAllPosts()
  }, [])

  return(
    <div>
      {
        allPosts.map((post, index)=>{
          return(
            <div key={index} className='itemContainer'>
              <h3>{post.title}</h3>
              <h5>{post.description}</h5>
              <h3>{post.location}</h3>
              <button onClick={()=>{
                navigate(`/${post._id}`)
                setSelectedPost(post)
              }}>See Details</button>
            </div>
          )
        })
      }
    </div>
  )
}