import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
const ApplyEvent = () =>{
    const {user} = useAuthContext()
    const { dispatch } = useEventContext()
    const [error, setError] = useState(null)
    let location = useLocation();
    let eventData = location.state;
    console.log("location: ", eventData);
    console.log("idsi: ",  eventData._id);
   
    const handleClick = async (e) => {
      // make handleClick an async function because we are going to reach out to the API
      e.preventDefault() // prevent the default action when the button is clicked
      if (!user) {
          setError('You must be logged in')
          return
      }
    
      const email = user.email
      const event = eventData
      const eventAndUser = {event,email}
      try {
        const response = await fetch('/api/user/addtoeventslist', {
          method: 'PATCH',
          body: JSON.stringify(eventAndUser),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
          }
        });
        if (!response.ok) {
          const json = await response.json();
          setError(json.error);
          return;
        }
        const json = await response.json();
        console.log("response is ok. json is, ", json);
        setError('');
        const { message } = json;
        alert(message);
      } catch (error) {
        setError('An error occurred while adding the event to your events list');
      }
    };
    

    return(
        <div className="event-details">
        <h4>{eventData.eventtitle}</h4>
        <p><strong>Location: </strong>{eventData.eventlocation}</p>
        <p><strong>Details: </strong>{eventData.eventbody}</p>
        <p><strong>Quota: </strong>{eventData.eventquota}</p>
        <span className="material-symbols-outlined" id="applyButton"onClick={handleClick}>Apply</span>
      </div>

    )



}
export default ApplyEvent