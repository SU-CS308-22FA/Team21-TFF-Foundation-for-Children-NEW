import EventDetails from '../components/EventDetails'
//import Updateevent from '.../components/Updateevent'
import { useEffect } from "react";
import { useEventContext } from "../hooks/useEventContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import { useState } from "react";

const MyEvents = (user) =>{
    //const { user } = useAuthContext()
    useEffect(() => {  // useEffect hook fires a function when the EventsTabOnTeacher component is rendered.
        console.log("id bu:", user._id)
        const fetchuserevent= async () =>{
          const response= await fetch('/api/user/getusers/' + user._id, {
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
            fetchuserevent()
        }
    }, [user])  //make sure that the useEffect hook runs only once, by adding a dependency treE


    return(
        /*
        <div className="EventsTabOnTeacherContainer">
            <div className="events">
            <h1> Events </h1>
            <Link to="addevent" id="addEventButtononEventTab">Add event</Link>
            {events && events.map((event) => (<EventDetails key={event._id} event = {event} />))}
            </div>
        </div> */
        <div className="EventsTabOnTeacherContai">
            <h1> My Events </h1>
            <div className="myevents">
            <h1> Events </h1>
            
            </div>
        </div>

    )
}
export default MyEvents