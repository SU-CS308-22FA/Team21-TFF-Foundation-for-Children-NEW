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
    // fetch the data when view was clicked.
    // bring it to here
    // if student clicks on apply
    // update the user. take the event json and add it to the array of events of the user.
    /*
    useEffect(() => {  // useEffect hook fires a function when the EventsTabOnTeacher component is rendered.
        const fetchEvent= async () =>{
          const response= await fetch('/api/event/getevents/' + eventData._id, {
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
    */
   

    const handleClick = async (e) => {  // make handleClick an async function because we are going to reach out to the API
        e.preventDefault() // prevent to take action when the page was refreshed.
        if (!user) {
            setError('You must be logged in')
            return
        }
      
        /*const response= await fetch('/api/event/getevents/' + eventData._id, {
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
        }*/
        const email =  user.email
        const event = eventData
        const eventAndUser = {event,email}
        const response = await fetch('/api/user/addToEventsList', {
            method: 'PATCH',
            body: JSON.stringify(eventAndUser),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            console.log("new event is added to events list(json), ", json)
        }


      }

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