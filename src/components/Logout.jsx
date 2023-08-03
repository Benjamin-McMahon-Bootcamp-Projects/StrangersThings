import { useNavigate } from "react-router-dom"

export default function Logout({ isAuth, setIsAuth, username, setUsername, password, setPassword, token, setToken }) {

  const navigate = useNavigate()

  setIsAuth(false)
  setToken('')
  setUsername('')
  setPassword('')

  return(
    navigate('/')
  )
}