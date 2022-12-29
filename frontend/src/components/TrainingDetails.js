import React from 'react';
import { Link } from 'react-router-dom'
const TrainingDetails = ({training}) => {
    let data = training;
  
    return (
        <div className="event-details">
          <h4>{training.trainingName}</h4>
          <Link to={`${training._id}`} state={data} ><button>View Details</button></Link>
        </div>
    );
  }
  
  
  
  

export default TrainingDetails;