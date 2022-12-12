import Navbar from "../components/Navbar"
import { useState } from "react";
import { useEventContext } from "../hooks/useEventContext"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
const Addevent = () =>{
    const { dispatch } = useEventContext()
    const { user } = useAuthContext()
    const[eventtitle, seteventtitle] = useState('');
    const[eventlocation, seteventlocation] = useState('');
    const[eventbody, seteventbody] = useState('');
    const[eventquota, seteventquota] = useState('');
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault() // prevent to take action when the page was refreshed.
        if (!user) {
            setError('You must be logged in')
            return
        }

        const stuevent = {eventtitle,eventlocation,eventbody,eventquota}
        console.log("in form: ", stuevent)
        const response = await fetch('/api/event/addevent', {
            method: 'POST',
            body: JSON.stringify(stuevent),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            // make the form empty again
            seteventtitle("")
            seteventlocation("")
            seteventbody("")
            seteventquota("")
            setError(null)
            setEmptyFields([])
            dispatch({type: 'ADD_EVENT', payload: json})
            console.log("new event is added (json), ", json)
        }
    }

    return(
        <div className="addeventContainer">
            <Navbar/>
            <form className="addevent" onSubmit={handleSubmit}>
            <br /> <br />
            <label>Event title (required):</label>
            <input 
                type="eventtitle" 
                onChange={(e) => seteventtitle(e.target.value)} 
                value={eventtitle} 
                className={emptyFields.includes('eventtitle') ? 'error' : ''}
            />
            <br /> <br />
            <label>Event City (required):</label>
            <input 
                type="eventlocation" 
                onChange={(e) => seteventlocation(e.target.value)} 
                value={eventlocation} 
                className={emptyFields.includes('eventlocation') ? 'error' : ''}
            />
            <br /> <br />
            <label>Event Description:</label>
            <input 
                type="eventbody" 
                onChange={(e) => seteventbody(e.target.value)} 
                value={eventbody} 
                className={emptyFields.includes('eventbody') ? 'error' : ''}
            />
            <br /> <br />
            <label>Event Quota:</label>
            <input 
                type="eventquota" 
                onChange={(e) => seteventquota(e.target.value)} 
                value={eventquota} 
                className={emptyFields.includes('eventquota') ? 'error' : ''}
            />
            <button type="submit">Add Event</button>
            {error && <div className="error">{error}</div>}
            </form>
            <Link to="/teacher/events" id = "returneventsbutton">Return to all events</Link>
        
        </div> 
    )



}
export default Addevent