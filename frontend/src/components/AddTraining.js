import Navbar from "./Navbar"
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from "react";
import { useEffect } from "react";
import Calendar from "./Calendar";
const AddTraining = () =>{
    

    const { user } = useAuthContext()
    const [error, setError]= useState(null)
    const [trainingname, settrainingname] = useState('');
    const [datenumber, setdatenumber] = useState('');
    const [calendars, setCalendars] = useState('');
    
   
    useEffect(() => {
      console.log("fetching calendars1")
          const fetchCalendars= async () =>{
          const response2= await fetch('/api/calendar/'+user.email)
          const json2= await response2.json()
          
          if(response2.ok){
            setCalendars(json2)
            
            console.log("good")
          }     
    }
        fetchCalendars()
      }, [])
    const add= async (event) =>{
        event.preventDefault();
        console.log("teacher's email: ",user.email)
        //teachers email is here
        const teacheremail= user.email
        
        const training= {trainingname, datenumber, teacheremail}
        //console.log(training.trainingname, training.datenumber)
        
        
        const response= await fetch('/api/calendar/addtraining',{
          method: 'POST',
          body: JSON.stringify(training),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(!response.ok){
          //console.log("bumbum")
        }
        const json= await response.json()
        

        if(!response.ok){
          setError(json.error)
          //console.log("bum")
        }
        if(response.ok){
          setError(null)
          setdatenumber('')
          settrainingname('')
         
          
        }
    }
    return (
        <div className="loginContainerrr">
          <Navbar/>
          
         
          <form className="login" onSubmit={add}>
            <h3>Training</h3>
            
            <label>Training Name:</label>
            <input 
               type="text" 
               name="trainingname"
               onChange={event => settrainingname(event.target.value)}
               value={trainingname}
            />
            <label>Enter a day:</label>
            <input 
              type="text" 
              name="datenumber"
              onChange={event => setdatenumber(event.target.value)}
              value={datenumber}
            />
              
              
            <button>Add Training</button>
            
          </form>
          
           
   
          <Calendar calendars={calendars}/>
          
          
           
          </div>
    )
}
export default AddTraining


