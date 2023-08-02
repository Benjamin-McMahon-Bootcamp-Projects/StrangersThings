import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import Profile from './components/Proflie'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/NavBar'

const mainBaseUrl = 'https://strangers-things.herokuapp.com/api/'
const cohort = '2306-FTB-ET-WEB-FT'
const baseUrl = mainBaseUrl + cohort

function App() {




  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
