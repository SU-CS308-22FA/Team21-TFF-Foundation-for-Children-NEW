import { useEffect, useState } from "react";
import { useEventContext } from "../hooks/useEventContext"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLocation } from 'react-router-dom';
import { useParams} from 'react-router-dom';
const UpdateEvent = () =>{
    const { user } = useAuthContext()
    
    let location = useLocation();
    let eventData = location.state;
    
    const[eventtitle, seteventtitle] = useState('');
    const[eventlocation, seteventlocation] = useState('');
    const[eventbody, seteventbody] = useState('');
    const[eventquota, seteventquota] = useState('');
    const [emptyFields, setEmptyFields] = useState([])
    const params = useParams();
    const [error, setError] = useState(null)

    useEffect(()=>{
        getEventDetails();

    },[])

    const getEventDetails = async() => {
        
        seteventtitle(eventData.eventtitle);
        seteventlocation(eventData.eventlocation);
        seteventbody(eventData.eventbody);
        seteventquota(eventData.eventquota);

    }

    const handleSubmit = async (e) => {
        e.preventDefault() // prevent to take action when the page was refreshed.
        if (!user) {
            setError('You must be logged in')
            return
        }

        const stuevent = {eventtitle,eventlocation,eventbody,eventquota}
        
        const response = await fetch('/api/event/getevents/'+ eventData._id, {
            method: 'PATCH',
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
            
        }
    }
   

    return(
        <div className="event-details">
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
            <button type="submit">Update Event</button>
            <Link to="/teacher/events" id = "returneventsbutton">Return to events</Link>
            {error && <div className="error">{error}</div>}
            </form>
        </div>
        
    )
}
export default UpdateEvent