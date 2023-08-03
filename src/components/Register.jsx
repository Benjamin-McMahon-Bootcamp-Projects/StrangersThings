import { useState } from "react"

export default function Register({ baseUrl, username, setUsername, password, setPassword, token, setToken, isAuth, setIsAuth }) {

  const [ registerMessage, setRegisterMessage ] =useState('')

  async function fetchUserRegister() {
    try{

      const response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      })

      const result = await response.json()
      console.log(result)
      setToken(result.data.token)
      setRegisterMessage(result.data.message)
      setIsAuth(true)

    }catch(err){
      console.log('Error during user registration')
    }
  }

  return(
    <div>
      <h3>Register</h3>

      <div className="registerContainer">
        <form onSubmit={(event)=>{
          // logic to run when form is submitted
          event.preventDefault()
          if (username && password){
            fetchUserRegister()
          }else{
            alert('Please enter registration details')
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

      <h3>{registerMessage}</h3>
    </div>
  )
}