import { useEventContext } from '../hooks/useEventContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
const ApplyEvent = () =>{
    const {user} = useAuthContext()

    let location = useLocation();
    let eventData = location.state;
    console.log("location: ", eventData);
    console.log("idsi: ",  eventData._id);
    // fetch the data when view was clicked.
    // bring it to here
    // if student clicks on apply
    // update the user. take the event json and add it to the array of events of the user.

    useEffect(() => {  // useEffect hook fires a function when the EventsTabOnTeacher component is rendered.
        const fetchEvent= async () =>{
          const response= await fetch('/api/event/getevents' + eventData._id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            }
          })
          const json = await response.json()
          console.log("json bu:", json)
          if(response.ok){
            console.log("response okkkk")// remember, the payload should be an array of events. json is an array of events here.
          }
        }
        if (user) {
        fetchEvent()
        }
    }, [eventData])  //make sure that the useEffect hook runs only once, by adding a dependency treE

    return(
        <div className="event-details">
        <h4>{eventData.eventtitle}</h4>
        <p><strong>Location: </strong>{eventData.eventlocation}</p>
        <p><strong>Details: </strong>{eventData.eventbody}</p>
        <p><strong>Quota: </strong>{eventData.eventquota}</p>
        <span className="material-symbols-outlined" id="applyEventBut">apply</span>
      </div>

    )



}
export default ApplyEvent