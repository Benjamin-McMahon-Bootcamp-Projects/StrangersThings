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
        {isAuth && <Link to='/profile'>Profile</Link>}
        {!isAuth && <Link to='/login'>Login</Link>}
        {isAuth && <Link to='/logout'>Logout</Link>}
        {!isAuth && <Link to='/register'>Register</Link>}
      </div>
    </div>  
  )
}