import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../img/TFFFC.png';
const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    navigate("/")
  };
  const handleIssue = () => {
    navigate("/reportIssue")
  };
  const handleHome = () => {
    if (user.role === "Student") {
      navigate("/student")

    }
    if (user.role === "Teacher") {
      navigate("/teacher")
    }
    if (user.role === "Admin") {
      navigate("/admin")
    }

  };


  return (
    <header>
      <div className="container">
        <Link to="/">
          <img height="100px" src={logo} alt="" />
        </Link>
        <nav>
          {user && (
            <div>
              <span>{ user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <button onClick={handleHome}>Content</button>
              <button onClick={handleIssue}>Create Issue</button>
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
