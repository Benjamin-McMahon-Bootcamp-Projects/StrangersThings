import { Link, useParams } from 'react-router-dom'

export default function NavBar({ username, isAuth }) {

  return(
    <div className='navBar'>
      <div className='navText'>
        <div className='userBox'>{
          isAuth && <h1>{username}'s List</h1>
        }</div>
        <div className='userBox'>{
          !isAuth && <h1></h1>
        }</div>
        <Link to='/'>Posts</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>{isAuth ? 'Logout' : 'Login'}</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>  
  )
}