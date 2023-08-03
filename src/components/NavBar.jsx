import { Link } from 'react-router-dom'

export default function NavBar({ username, isAuth }) {



  return(
    <div className='navBar'>
      <div className='navText'>
        <div className='loggedInUser'>{
          isAuth && <h1>{username}</h1>
        }</div>
        <Link to='/'>Posts</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>  
  )
}