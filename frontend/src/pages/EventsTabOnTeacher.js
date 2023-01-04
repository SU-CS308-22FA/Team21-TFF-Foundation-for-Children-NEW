//components
import EventDetails from '../components/EventDetails'
//import Updateevent from '.../components/Updateevent'
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import { useEventContext } from "../hooks/useEventContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

//import UpdateForm from '../components/Updateevent'

const EventsTabOnTeacher = () =>{

    const { events, dispatch } = useEventContext() // events will be changed with 
    const {user} = useAuthContext()

    useEffect(() => {  // useEffect hook fires a function when the EventsTabOnTeacher component is rendered.
        const fetchEvents= async () =>{
          const response= await fetch('/api/event/getevents', {
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json= await response.json() // json contains an array of event objects.
          if(response.ok){
            dispatch({type: 'VIEW_EVENT', payload: json})// remember, the payload should be an array of events. json is an array of events here.
          }
        }
        if (user) {
        fetchEvents()
        }
    }, [dispatch, user])  //make sure that the useEffect hook runs only once, by adding a dependency tree
    return(
        <div className="EventsTabOnTeacherContainer">
            <div className="events">
            <Navbar />
            <h1> Events </h1>
            <Link to="addevent" id="addEventButtononEventTab">Add event</Link>
            <br></br>
            <br></br>
            <br></br>
            {events && events.map((event) => (<EventDetails key={event._id} event = {event} />))}
            </div>
        </div>

    )
}
export default EventsTabOnTeacher