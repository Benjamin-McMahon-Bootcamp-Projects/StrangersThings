import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import Profile from './components/Proflie'
import Login from './components/Login'
import Register from './components/Register'

function App() {



  return (
    <div>
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
