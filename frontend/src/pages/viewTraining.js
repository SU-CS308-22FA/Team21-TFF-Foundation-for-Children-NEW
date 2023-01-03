import { useTrainingContext } from '../hooks/useTrainingContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const ViewTraining = () =>{
  const {user} = useAuthContext()
  const { dispatch } = useTrainingContext()
  const [error, setError] = useState(null)
  let location = useLocation();
  let trainingData = location.state;
  console.log("location: ", trainingData);
  console.log("idsi: ",  trainingData._id);
  const trainingId = trainingData._id;
  console.log(trainingId)

  // Define the userIds and setUsers variables
  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState([]);
  

  // get the id of the training.
  // search this training id in the studentcalendars collection
  // get the user id's of those documents
  // get the those users by id
  const calendars = useRef();
  const fetchUsers = async (userIds) => {
    console.log("the current userid is: ", userIds)
    try {
      
      const response = await fetch(`/api/user/getsomeusers?userIds=${userIds.join(',')}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      if (!response.ok) {
        // handle non-200 response
      }
      const json = await response.json();
  
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        console.log("Success. Users: ", json);
        setUsers(json);
        setError(null);
      }
    } catch (error) {
      setError(
        "An error occurred while getting the users with the given IDs!"
      );
    }
  };

  useEffect(() => {
    const fetchCalendars= async () =>{
      try {
        const response = await fetch('/api/studentcalendar/getcalendarswithtraningId/'+ trainingId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
        }
        const json = await response.json();
    
        if (!response.ok) {
          setError(json.error);
        }
        if (response.ok) {
          console.log("basarili. calendar objects: ", json)
          setError(null);
          calendars.current = json;
          // Get the user IDs from the calendar objects
          const userIds = json.map(calendar => calendar.userId);
          // Fetch the user documents with the user IDs
          if (userIds.length !== 0){
            fetchUsers(userIds);
          }
        }
      } catch (error) {
        setError(
          "An error occurred while getting the calendar with the given trainingId!"
        );
    }     
}
  fetchCalendars()
}, [trainingId, userIds]);

    return(
        <div className="event-details">
        <h4>{trainingData.trainingName}</h4>
        <p><strong>Date: </strong>{trainingData.date}</p>
        <p><strong>Skills: </strong>{trainingData.skills}</p>
        <div className="button-container">
        <Link to="assign/students" state={trainingData} className="material-symbols-outlined" id="addTrainingTo"> Assign </Link>
        </div>
        <br></br>
        The training has already been assigned to:
        {users && users.map((stu) =>(
                <div className="userContainer">
                    <h3> Student Information </h3>
                    <p key= {stu._id}><strong> Email: </strong> <span id="infoText"> {stu.email} </span> </p>
                    <Link to='skills' state={{current: calendars.current, userId: stu._id}} id="selectButton">Update level</Link>
                </div>
                ))}
      </div>

    )

}
export default ViewTraining;