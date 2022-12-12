import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'

const EventDetails = ({ event }) => {
    const { dispatch } = useEventContext()
    const { user } = useAuthContext()

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

    return (
      <div className="event-details">
        <h4>{event.eventtitle}</h4>
        <p><strong>Location: </strong>{event.eventlocation}</p>
        <p><strong>Details: </strong>{event.eventbody}</p>
        <p><strong>Quota: </strong>{event.eventquota}</p>
        <span className="material-symbols-outlined" id="updateEventButton" onClick={handleClick}>update</span>
        <span className="material-symbols-outlined" id="deleteEventButton"onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default EventDetails