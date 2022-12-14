import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from "react";
import { Link } from 'react-router-dom'
const EventDetails = ({ event }) => {
    const { dispatch } = useEventContext()
    const { user } = useAuthContext()

    /*const[eventtitle, seteventtitle] = useState('');
    const[eventlocation, seteventlocation] = useState('');
    const[eventbody, seteventbody] = useState('');
    const[eventquota, seteventquota] = useState('');
    const [error, setError] = useState(null)*/

    const handleClick = async () => {  // make handleClick an async function because we are going to reach out to the API
      if (!user) {
        console.log("please log in!")
        return
      }
      const response = await fetch('/api/event/getevents/' + event._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      

      const json = await response.json()
      console.log("json bu:", json)

      if (response.ok) {
        dispatch({type: 'DELETE_EVENT', payload: json})
      }
      else {
        console.log("delete hatali")
      }
    }
/*
      const sendEventDetails = async (e) => {
        if (!user) {
          console.log("please log in!")
          return
        }
        const response = await fetch('/api/event/getevents/' + event._id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`

          }
        })
        
  
        const json = await response.json()
        console.log("json bu:", json)
  
        if (response.ok) {
          console.log("event alindi")
          seteventtitle(json.eventtitle)
          seteventlocation(json.eventlocation)
          seteventbody(json.eventbody)
          seteventquota(json.eventquota)
          setError(null)
          console.log("artik: ", eventtitle, eventlocation, eventbody, eventquota)
        }
        else {
          console.log("get hatali")
        }
      }
      */
      let data = event;


    return (
      <div className="event-details">
        <h4>{event.eventtitle}</h4>
        <p><strong>Location: </strong>{event.eventlocation}</p>
        <p><strong>Details: </strong>{event.eventbody}</p>
        <p><strong>Quota: </strong>{event.eventquota}</p>
        <span className="material-symbols-outlined" id="deleteEventButton"onClick={handleClick}>delete</span>
        <Link to="updateevent" state={data} className="material-symbols-outlined" id="updateEventButton">update</Link>
      </div>
    )
  }
  
  export default EventDetails