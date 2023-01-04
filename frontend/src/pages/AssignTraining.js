import { useAuthContext } from '../hooks/useAuthContext'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import { useSkillContext } from '../hooks/useSkillContext'
import{useCalendarContext} from '../hooks/useCalendarContext'
import { useLocation } from 'react-router-dom';

const AssignTrainingsToStu = () =>{

    
    const { user } = useAuthContext()
    
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null);
    const email= user.email
    let location = useLocation();
    let trainingData = location.state;
    
    useEffect(() => {
        const fetchUsers= async () =>{
           
          const response= await fetch('/api/user/getstudents/'+email)
          const json= await response.json()
          if(response.ok){
            setUsers(json)
            
          }
    }
  
        fetchUsers()
      }, [email])
      console.log(users)

      const assignTraining = async (stu) => {
        // add the training to the calendar of the student
        // firstly, create a calendar object:
        alert("training has been assigned");
      
        
        const level = null;
        const skillDate = trainingData.date;
        const userId = stu;
        const skillIds = []; // array to store the IDs of the created skills
        // create skill objects
        for (const s of trainingData.skills) {
          const skillName = s;
          const skill = { userId, skillName, level, skillDate };
          
        
          try {
            const response = await fetch("/api/skill/addSkill", {
              method: "POST",
              body: JSON.stringify(skill),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
            });
            if (!response.ok) {
            }
            const json = await response.json();
        
            if (!response.ok) {
              setError(json.error);
            }
            if (response.ok) {
              setError(null);
              skillIds.push(json._id); // add the ID of the skill to the array
              
            }
          } catch (error) {
            setError(
              "An error occurred while creating a skill!"
            );
          
          };

        };

        const type = "training";
        const trainingId = trainingData._id;
        const trainingDate = trainingData.date;
        const eventId = null;
        const eventDate = null;
        const skills = skillIds;


        const studentcalendar = {userId, type, eventId, trainingId, eventDate, trainingDate, skills};
        
       
      
        try {
          const response = await fetch("/api/studentcalendar/addStudentCalendar", {
            method: "POST",
            body: JSON.stringify(studentcalendar),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          });
          if (!response.ok) {
          }
          const json = await response.json();
      
          if (!response.ok) {
            setError(json.error);
          }
          if (response.ok) {
            setError(null);
          }
        } catch (error) {
          setError(
            "An error occurred while adding the training to the calendar of the student!"
          );
        
        };

      };
  
     // search its skills array

      // for each string in skills array, create a skill object

      // the skillName of this object will be a string in the skills array
      // the userID
      // the skillDate 
      // level will be null

    return (
        <div className="Selection">
            <Navbar/>
            <div id="selectionHeader1Container">
              <h1 id="selectionHeader1"> STUDENT ACCOUNT DATABASE </h1>
            </div>
            {users && users.map((user2) =>(
                <div className="userContainer">
                    <h3> Student Information </h3>
                    <p key= {user2._id}><strong> Email: </strong> <span id="infoText"> {user2.email} </span> </p>
                    <p><strong> User Name:</strong> <span id="infoText">{user2.userName}</span></p>
                    <button id="selectButton" name="email" onClick={() => assignTraining(user2._id)}> Choose </button>
                </div>
            ))}
            </div>
    )
}
export default AssignTrainingsToStu;