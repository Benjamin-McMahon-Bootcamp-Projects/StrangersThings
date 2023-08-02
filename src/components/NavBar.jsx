import { Link } from 'react-router-dom'

export default function NavBar() {



  return(
    <div className='navBar'>
      <Link to='/'>Posts</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}