import { useEffect, useState } from 'react'

const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
const cohort = '2306-FTB-ET-WEB-FT'
const baseUrl = mainBaseUrl + cohort

export default function Posts() {

  const [ allPosts, setAllPosts ] = useState([])

  useEffect(()=>{
    async function fetchAllPosts() {
      try{
  
        const response = await  fetch(`${baseUrl}/posts`)
        const result = await response.json()
        setAllPosts(result.data.posts)
  
      }catch(err){
        console.log('Error fetching all posts')
      }
    }
    fetchAllPosts()
  }, [])

  console.log(allPosts)

  return(
    <div>
      <h3>All Posts</h3>
      {
        allPosts.map((post, index)=>{
          return(
            <div key={index} className='itemContainer'>
              <h3>{post.title}</h3>
              <h5>{post.description}</h5>
              <h3>{post.locaiton}</h3>
            </div>
          )
        })
      }
    </div>
  )
}