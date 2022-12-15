import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  let navigate = useNavigate();
  //let location = useLocation();
  /*
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role === "Teacher") {
      navigate('/Teacher');
    } else if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role === "Student") {
      navigate('/Student');
    }
  }, [navigate]);*/
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log('json bu:', json);
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      console.log('entered to login');
      // update loading state
      setIsLoading(false);

      //const redirect = location.search.split('=')[1];

      if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role === 'Student') {
        console.log("33.satir: ", localStorage.getItem('user'))
        console.log('Redirecting to student dashboard')
        navigate('/student');
      } else if (json.role === 'Teacher') {
        console.log('Redirecting to teacher dashboard');
        navigate('/teacher');
      }
      else if (
        JSON.parse(localStorage.getItem('user')) && 
        JSON.parse(localStorage.getItem('user')).role === 'Teacher'
        //!redirect
      ) {
          console.log('Redirecting to teacher dashboard')
          navigate('/teacher');
        } 
    }
  };

  return { login, isLoading, error };
};
