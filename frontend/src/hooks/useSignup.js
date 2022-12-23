import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  
  const signup = async (email, userName, password, role, assignedemail) => {
    console.log("role:", role, "hata hook mu??")
    setIsLoading(true)
    setError(null)
    console.log("in useSignup: ", assignedemail)
    console.log("in useSignup email: ", email)
    console.log(" usesign up: username ", userName)
    console.log("usesign up: password ", password)
    console.log("usesign up: role ", role)
    console.log("usesign up: assignedemail ", assignedemail)
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, userName, password, role, assignedemail })
    })
    console.log("Sign up json:", JSON)
    const json = await response.json()
    console.log("json bu:", json)
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
      if (role === 'Student') {
        navigate('/student');
      } else if (role === 'Teacher') {
        navigate('/teacher');
      }
    }
  };

  return { signup, isLoading, error };
};
