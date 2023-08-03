import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import Profile from './components/Proflie'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/NavBar'
import { useState } from 'react'

const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
const cohort = '2306-FTB-ET-WEB-FT'
const baseUrl = mainBaseUrl + cohort

function App() {

  const [ isAuth, setIsAuth ] = useState(false)
  const [ authToken, setAuthToken ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ token, setToken ] = useState('')

  console.log(isAuth, username, password, token)


  return (
    <div>
      <NavBar username={username} isAuth={isAuth} />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login 
          isAuth={isAuth} setIsAuth={setIsAuth}
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          token={token} setToken={setToken}
          />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
