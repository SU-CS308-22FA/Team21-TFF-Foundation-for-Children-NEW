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
    
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
   
      // update loading state
      setIsLoading(false);

      //const redirect = location.search.split('=')[1];

      if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role === 'Student') {
        
        navigate('/student');
      }
      else if (
        JSON.parse(localStorage.getItem('user')) && 
        JSON.parse(localStorage.getItem('user')).role === 'Teacher'
        //!redirect
      ) {
          
          navigate('/teacher');
        }
      else {
         navigate('/admin');
      }
    }
  };

  return { login, isLoading, error };
};
