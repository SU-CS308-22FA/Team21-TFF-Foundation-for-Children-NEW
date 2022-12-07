import { useState } from 'react';
import { useEventContext } from './useEventContext'

//import { useNavigate } from 'react-router-dom'

export const useAddEvents = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useEventContext()
  //const navigate = useNavigate();
  const addevent = async(eventtitle,eventlocation,eventbody,eventquota) => {
    console.log(eventtitle,eventlocation,eventbody,eventquota,"hata hook mu??")
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/event/addevent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ addevent })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      dispatch({type: 'ADD_EVENT', payload: json})
      setIsLoading(false)

    }

  }
  
  return { addevent, isLoading, error }

}