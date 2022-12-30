import React from 'react';
import { Link } from 'react-router-dom'
const SkillDetails = ({skill}) => {
    let data = skill;
  
    return (
        <div className="event-details">
          <h4>{skill.skillName}</h4>
          <Link to={`${skill._id}`} state={data} ><button>View Details</button></Link>
        </div>
    );
  }
  
  
  
  

export default SkillDetails;