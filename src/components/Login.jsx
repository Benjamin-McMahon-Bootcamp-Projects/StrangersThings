import { useEffect, useState } from "react"

export default function Login({ isAuth, setIsAuth, username, setUsername, password, setPassword, token, setToken, baseUrl }) {

  const [ loginMessage, setLoginMessage ] = useState('')

  async function fetchUserLogin() {
    try{
      const response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          user: {
            username,
            password
          }})
      })
      const result = await response.json()
      console.log(result)
      setToken(result.data.token)
      setLoginMessage(result.data.message)
      setIsAuth(true)

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
          if(username && password){
            fetchUserLogin()
          }else{
            alert('Please enter login credentials')
          }

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
    </div>

    )
}