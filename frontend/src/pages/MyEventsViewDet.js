import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const MyEventsDetails = () =>{
  const {user} = useAuthContext()
  const { dispatch } = useEventContext()
  const [error, setError] = useState(null)
  let location = useLocation();
  let eventData = location.state;
  
 
  
  

    return(
        <div className="event-details">
        <h4>{eventData.eventtitle}</h4>
        <p><strong>Location: </strong>{eventData.eventlocation}</p>
        <p><strong>Details: </strong>{eventData.eventbody}</p>
        <p><strong>Quota: </strong>{eventData.eventquota}</p>
        <br></br>
        <br></br>
        <Link to="/student/events/myevents" id="returneventsbutton">
                Return to my events
          </Link>
      </div>


    )



}
export default MyEventsDetails;