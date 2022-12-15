import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'

const Navbar2 = () => {
  const { user } = useAuthContext()

  const handleClick = () => {
    <Link to="/"></Link>
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>TFF foundation for children</h1>
        </Link>
        <nav>
          {user &&(
            <div>
              <span>{ user.email }</span>
              <button onClick={handleClick}>Return</button>
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

export default Navbar2