import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export default function Details( { baseUrl }) {

  let { postId } = useParams();
  const [ allPosts, setAllPosts ] = useState([])
  const navigate = useNavigate()
  const [ specificPost, setSpecificPost ] = useState({})

  useEffect(()=>{
    async function fetchSpecificPost() {
      try{

        const response = await fetch(`${baseUrl}/posts`)
        const result = await response.json()
        setAllPosts(result.data.posts)
        setSpecificPost(allPosts.filter((post)=>{
          postId == post._id
          console.log(post._id)
          console.log(specificPost)
        }))

        console.log(specificPost)

      }catch(err){
        console.log('Error fetching specific post')
      }
    }
    fetchSpecificPost()
  }, [])

  return(
    <div>
      <h1>Welcome to detail view</h1>
      <button onClick={()=>{navigate('/')}}>Return</button>
    </div>
  )
}