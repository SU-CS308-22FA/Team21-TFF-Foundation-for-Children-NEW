import Navbar from "../components/Navbar"

import { useState } from "react";
import { useAddEvents } from "../hooks/useAddEvents"

const Addevent = () =>{
    const[eventtitle, seteventtitle] = useState('');
    const[eventlocation, seteventlocation] = useState('');
    const[eventbody, seteventbody] = useState('');
    const[eventquota, seteventquota] = useState('');
    const {addevent, error, isLoading} = useAddEvents()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.warn("all data",eventtitle,eventlocation,eventbody,eventquota)
        await addevent(eventtitle,eventlocation,eventbody,eventquota)
        seteventtitle("")
        seteventlocation("")
        seteventbody("")
        seteventquota("")
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
            />
            <br /> <br />
            <label>Event City (required):</label>
            <input 
                type="eventlocation" 
                onChange={(e) => seteventlocation(e.target.value)} 
                value={eventlocation} 
            />
            <br /> <br />
            <label>Event Description:</label>
            <input 
                type="eventbody" 
                onChange={(e) => seteventbody(e.target.value)} 
                value={eventbody} 
            />
            <br /> <br />
            <label>Event Quota:</label>
            <input 
                type="eventquota" 
                onChange={(e) => seteventquota(e.target.value)} 
                value={eventquota} 
            />
            <button disabled={isLoading} type="submit">Add Event</button>
            {error && <div className="error">{error}</div>}
            </form>
        
        </div> 
    )



}
export default Addevent