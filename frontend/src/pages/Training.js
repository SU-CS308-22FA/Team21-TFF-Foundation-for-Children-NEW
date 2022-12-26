import AddTraining from "../components/AddTraining"

import { useState, useEffect } from 'react';



const Training= ()=>{
    
    const [calendar, setCalendar]= useState(null)
    useEffect(() => {
      const fetchCalendar= async () =>{
        const response= await fetch('/api/calendar')
        const json= await response.json()
        if(response.ok){
          setCalendar(json)
        }
      }

      fetchCalendar()
    }, [])

    return(
        <div className="training">
            
            <AddTraining />

        </div>
    )
}

export default Training