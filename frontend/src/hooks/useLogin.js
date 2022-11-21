import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';
export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password})
    })
    const json = await response.json()
    console.log("json bu:", json)
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      console.log("entered to login")
      // update loading state
      setIsLoading(false)
      if (JSON.parse(localStorage.getItem('user')).userrole === 'Student') {
        console.log("33.satir: ", localStorage.getItem('user'))
        console.log('Redirecting to student dashboard')
      }
      else {
        console.log("33.satir: ", localStorage.getItem('user'))
        console.log('Redirecting to teacher dashboard')
      } 
    }
  }

  return { login, isLoading, error }
}