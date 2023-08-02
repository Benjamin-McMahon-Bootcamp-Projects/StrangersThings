import { useEffect, useState } from "react"

export default function Register() {

  const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
  const cohort = '2306-FTB-ET-WEB-FT'
  const baseUrl = mainBaseUrl + cohort

  const [ token, setToken ] = useState('')
  const [ successMessage, setSuccessMessage ] =useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ user, setUser ] = useState({})

    async function fetchUserRegister() {
      try{

        const response = await fetch(`${baseUrl}/users/register`, {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({user})
        })

        const result = await response.json()
        console.log(result)
        setToken(result.data.token)
        setSuccessMessage(result.data.message)

        console.log(successMessage)
        

      }catch(err){
        console.log('Error during user registration')
      }
    }

  return(
    <div>
      <div className="registerContainer">
        <form onSubmit={(event)=>{
          // logic to run when form is submitted
          
          event.preventDefault()
          setUser({
            username: username,
            password: password
          })
          fetchUserRegister()
          console.log('form tried submit')

        }}>
          {/* the start of the form children elements */}

          <label>
            Username: <input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}} />
          </label>

          <label>
            Password: <input type="text" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>




      <h3>Register</h3>
      <h3>{token}</h3>
      <h3>{successMessage}</h3>
    </div>
  )
}