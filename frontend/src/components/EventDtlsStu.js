import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
const EventDetailsStu = ({ event }) => {

  let data = event;
  //console.log("data: ", data);

  /*const handleClick = async () => {  // make handleClick an async function because we are going to reach out to the API
    if (!user) {
      console.log("please log in!")
      return
    }
  } */

    return (
      <div className="event-details">
        <h4>{event.eventtitle}</h4>
        <Link to="applyevent" state={data} id="viewEventButton">View</Link>
      </div>
    )
  }
  
  export default EventDetailsStu;