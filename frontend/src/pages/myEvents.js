import MyEventsEventDetailsStu from '../components/myEventsDetails'
//import Updateevent from '.../components/Updateevent'
import { useEffect } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import { useState } from 'react';
const MyEvents = () =>{

    const {user} = useAuthContext()
    const email= user.email
    const [users, setUsers]= useState([])
    useEffect(() => {
        const fetchUsers= async () =>{
            
           
          const response= await fetch('/api/user/getEventsList/' + email)
          const json= await response.json()
          if(response.ok){
            setUsers(json)
            
          }
    }
  
        fetchUsers()
      }, [email])
    return(
        <div className="EventsTabOnStudentContainer">
            <div className="events">
            <h1> Events </h1>
            {users && users.map((event) => (<MyEventsEventDetailsStu key={event._id} event = {event} />))}
            </div>
        </div> 
    )
}
export default MyEvents;