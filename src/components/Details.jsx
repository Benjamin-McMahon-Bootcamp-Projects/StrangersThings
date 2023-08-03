import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export default function Details( { selectedPost }) {

  const navigate = useNavigate()
  console.log(selectedPost)

  return(
    <div>
      <h1>{selectedPost.title}</h1>
      <h2>{selectedPost.description}</h2>
      <h3>Seller: {selectedPost.author.username}</h3>
      <h3>Location: {selectedPost.location}</h3>
      <h3>Price: {selectedPost.price}</h3>
      <h3>Will Deliver: {selectedPost.willDeliver ? 'Yes' : 'No'}</h3>
      {
        selectedPost.messages.map((message, index)=>{
          return(
            <div key={index} className="messageContainer">
              <h4>{message.content}</h4>
            </div>  
          )
        })
      }

      <button onClick={()=>{navigate('/')}}>Return</button>
    </div>
  )
}


// let { postId } = useParams();
// const [ allPosts, setAllPosts ] = useState([])
// const [ specificPost, setSpecificPost ] = useState({})

  // useEffect(()=>{
  //   async function fetchSpecificPost() {
  //     try{

  //       const response = await fetch(`${baseUrl}/posts`)
  //       const result = await response.json()
  //       setAllPosts(result.data.posts)

  //       setSpecificPost(allPosts.find((post)=>{
  //         post._id === postId
  //       }))
  //       console.log(specificPost)

  //     }catch(err){
  //       console.log('Error fetching specific post')
  //     }
  //   }
  //   fetchSpecificPost()
  // }, [])