import { useState } from "react"

export default function Login() {

  const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
  const cohort = '2306-FTB-ET-WEB-FT'
  const baseUrl = mainBaseUrl + cohort

  const [ user, setUser ] = useState({})
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ token, setToken ] = useState('')
  const [ loginMessage, setLoginMessage ] = useState('')

  async function fetchUserLogin() {
    try{
      
      const response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({user})
      })
      const result = await response.json()
      console.log(result)
      setToken(result.data.token)
      setLoginMessage(result.data.token)
  

    }catch(err){
      console.log('Error trying to fetch login')
    }
  }

  return(
    <div>
      <h3>Login</h3>

      <div className="loginContainer">
        <form onSubmit={(event)=>{
          // logic to run when form is submitted

          event.preventDefault()
          setUser({
            username: username,
            password: password
          })
          fetchUserLogin()
          console.log('form tried submit')

        }}>
          {/* the start of the form children elements */}

          <label>
            Username: <input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}} />
          </label>

          <label>
            Password: <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

      <h3>{loginMessage}</h3>
      <h4>{token}</h4>
    </div>
  )
}