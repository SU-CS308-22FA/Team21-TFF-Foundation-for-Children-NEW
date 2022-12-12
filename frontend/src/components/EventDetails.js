import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'

const EventDetails = ({ event }) => {
    const { dispatch } = useEventContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
      if (!user) {
        return
      }
    }

    return (
      <div className="event-details">
        <h4>{event.eventtitle}</h4>
        <p><strong>Location: </strong>{event.eventlocation}</p>
        <p><strong>Details: </strong>{event.eventbody}</p>
        <p><strong>Quota: </strong>{event.eventquota}</p>
        <button id="updateEventButton"> Update Event </button>
        <button id="deleteEventButton"> Delete Event </button>
      </div>
    )
  }
  
  export default EventDetails