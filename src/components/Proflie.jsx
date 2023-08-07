import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CreatePost from "./CreatePost"

export default function Profile({ token, baseUrl }) {

  const [ user, setUser ] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchUserProfile() {
      try{
        console.log(typeof token)
        console.log(`profile page token ${token}`)
        const response = await fetch(`${baseUrl}/users/me`, {
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
          },
        })
        const result = await response.json()
        setUser(result.data)
        console.log(user)

      }catch(err){
        console.log('Error fetching user profile')
      }
    }
    fetchUserProfile()
  }, [])

  return(
    <div className="profileContainer">
      <div className="profileInfo">
        <button onClick={()=>{
          navigate('/post')
        }}>New Post</button>
        <h3>Username: {user.username}</h3>
        <h3>ID: {user._id}</h3>
      </div>
      <div className="profilePosts">
        {
            // user.posts.map((post, index)=>{
            //   return(
            //     <div key={index} className="usersPost">
            //       <h3>{post.title}</h3>
            //       <h3>{post.price}</h3>
            //       <h5>{post.description}</h5>
            //       <h3>{post.location}</h3>
            //       <button>Edit Post</button>
            //       <button>Delete Post</button>
            //     </div>  
            //   )
            // })
        }
      </div>
    </div>
  )
}