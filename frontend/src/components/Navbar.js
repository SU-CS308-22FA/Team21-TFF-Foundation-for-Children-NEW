import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    navigate("/")
  };

  const handleClick2 = () => {
    if (user.role === 'Student'){
      navigate("/student");
    }
    else if (user.role === 'Teacher') {
      navigate('/teacher');
    }
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>TFF foundation for children</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{ user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <button onClick={handleClick2}>Home</button>
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
  );
};

export default Navbar;
