import { useState, useEffect } from "react"

export default function Profile({ token, baseUrl }) {

  const [ user, setUser ] = useState({})

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
        setUser(result)
        console.log(`Profile return ${result}`)

      }catch(err){
        console.log('Error fetching user profile')
      }
    }
    fetchUserProfile()
  }, [])

  return(
    <div>
      <h3>Profile</h3>
      <h3>{user.username}</h3>
    </div>
  )
}