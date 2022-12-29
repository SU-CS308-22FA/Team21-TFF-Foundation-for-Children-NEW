import { useTrainingContext } from '../hooks/useTrainingContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
const ViewTraining = () =>{
  const {user} = useAuthContext()
  const { dispatch } = useTrainingContext()
  const [error, setError] = useState(null)
  let location = useLocation();
  let trainingData = location.state;
  console.log("location: ", trainingData);
  console.log("idsi: ",  trainingData._id);
 
  
  

    return(
        <div className="event-details">
        <h4>{trainingData.trainingName}</h4>
        <p><strong>Date: </strong>{trainingData.date}</p>
        <p><strong>Skills: </strong>{trainingData.skills}</p>
        <div className="button-container">
        <span className="material-symbols-outlined" id="addSkillBut">delete</span>
        <Link to="update" state={trainingData} className="material-symbols-outlined" id="updateEventButton"> Update </Link>
        <Link to="assign/students" state={trainingData} className="material-symbols-outlined" id="addTrainingTo"> Assign </Link>
        </div>
        
      </div>

    )



}
export default ViewTraining;