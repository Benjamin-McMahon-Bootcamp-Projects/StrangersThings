import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'
import Posts from './components/Posts'
import Profile from './components/Proflie'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/NavBar'
import { useState } from 'react'
import Details from './components/Details'

const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
const cohort = '2306-FTB-ET-WEB-FT'
const baseUrl = mainBaseUrl + cohort

function App() {

  const [ isAuth, setIsAuth ] = useState(false)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ token, setToken ] = useState('')

  console.log(isAuth, username, password, token)


  return (
    <div>
      <NavBar username={username} isAuth={isAuth} />
      <Routes>
        <Route path='/' element={<Posts 
          baseUrl={baseUrl}
         />} />
        <Route path='/:postId' element={<Details
          baseUrl={baseUrl}
        />} /> 
        <Route path='/profile' element={<Profile
          baseUrl={baseUrl}
          token={token}
        />} />
        <Route path='/login' element={<Login 
          baseUrl={baseUrl}
          isAuth={isAuth} setIsAuth={setIsAuth}
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          token={token} setToken={setToken}
          />} />
        <Route path='/register' element={<Register
          baseUrl={baseUrl}
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          token={token} setToken={setToken}
        />} />
      </Routes>
    </div>
  )
}

export default App
