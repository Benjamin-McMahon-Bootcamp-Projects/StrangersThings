import { useEffect, useState } from 'react'

const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
const cohort = '2306-FTB-ET-WEB-FT'
const baseUrl = mainBaseUrl + cohort

export default function Posts() {

  const [ allPosts, setAllPosts ] = useState([])

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

  console.log(allPosts)

  return
  
  
  
  }