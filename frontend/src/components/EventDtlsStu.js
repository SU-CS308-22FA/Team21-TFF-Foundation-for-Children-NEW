import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'

const EventDetailsStu = ({ event }) => {
    const { dispatch } = useEventContext()
    const { user } = useAuthContext()

    return (
      <div className="event-details">
        <h4>{event.eventtitle}</h4>
        <p><strong>Location: </strong>{event.eventlocation}</p>
        <p><strong>Details: </strong>{event.eventbody}</p>
        <p><strong>Quota: </strong>{event.eventquota}</p>
      </div>
    )
  }
  
  export default EventDetailsStu