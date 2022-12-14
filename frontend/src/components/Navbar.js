import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>TFF foundation for children</h1>
        </Link>
        
        <nav>
        <button onClick={() => navigate(-1)}>Go back</button>
          {user &&(
            <div>
              <span>{ user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar