/*import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'
const EnterLevel = () =>{
    const { user } = useAuthContext()
    const[level, setLevel] = useState('');
    const params = useParams();
    let location = useLocation();
    const [error, setError] = useState(null)
    const [skills, setSkills] = useState([]);
    const { current: calendarsData, userId } = location.state;
    console.log("calendars here: ", calendarsData)
    console.log("user here: ", userId)
    const index = calendarsData.findIndex(calendar => calendar.userId === userId);
    console.log("bu userin calendarlari iste bunlar,", calendarsData[index]);
    const currentUsersSkills = calendarsData[index];

    const fetchSkills = async () => {
        const skillIds = currentUsersSkills.skills;
        console.log("skillIds here: ", skillIds) ;
        for (const skillid of skillIds) {
          console.log("fordaki bir skill id: ", skillid)
          try{
              const response= await fetch('/api/skill/getSkill/'+ skillid, {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${user.token}`
                  }

              });
              if (!response.ok) {
              }
              const json = await response.json();
          
              if (!response.ok) {
                setError(json.error);
              }
              if (response.ok) {
                console.log("skill bu: ", json)
                setError(null);
                setSkills(json);
              }
            } catch (error) {
              setError(
                "An error occurred while getting the skill!"
              );
            
            };
          }  
        } 

    useEffect(() => {
        fetchSkills();
      }, [fetchSkills]);



    return(
        <div>
        <h1>merhaba</h1>
        {skills.map((skill) => (
          <div key={skill.id}>
            {skill.name}
          </div>
        ))}
      </div>
        
    
    )
}
export default EnterLevel;
*/
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

const EnterLevel = () => {
  const { user } = useAuthContext()
  const [level, setLevel] = useState('');
  const params = useParams();
  let location = useLocation();
  const [error, setError] = useState(null)
  const [skills, setSkills] = useState([]);
  const { current: calendarsData, userId } = location.state;
  //console.log("calendars here: ", calendarsData)
  //console.log("user here: ", userId)
  const index = calendarsData.findIndex(calendar => calendar.userId === userId);
  //console.log("bu userin calendarlari iste bunlar,", calendarsData[index]);
  const currentUsersSkills = calendarsData[index];

  const fetchSkills = async () => {
    const skillIds = currentUsersSkills.skills;
    //console.log("skillIds here: ", skillIds);
    const fetchedSkills = [];
    for (const skillid of skillIds) {
      //console.log("fordaki bir skill id: ", skillid)
      try {
        const response = await fetch('/api/skill/getSkill/' + skillid, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (!response.ok) {
            // handle error
          }
          const json = await response.json();
          if (!response.ok) {
            setError(json.error);
          }
          if (response.ok) {
            //console.log("skill bu: ", json)
            setError(null);
            fetchedSkills.push(json);
          }
          if (skillIds.length === fetchedSkills.length) {
            setSkills(fetchedSkills);
            //console.log("skills: ", skills);
          }
          //console.log("final: ", skills);
        } catch (error) {
          setError("An error occurred while getting the skill!");
      }
    }
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div>
      <h1>merhaba</h1>
      {skills &&
        skills.map((skill) => (
          <div className="userContainer">
            <p key={skill._id}>
              <strong> Skill Name: </strong>{' '}
              <span id="infoText"> {skill.skillName} </span>{' '}
            </p>
            <p>
              <strong>Skill Date: </strong>
              {skill.skillDate}
            </p>
            <p>
              <strong>Skill Level: </strong>
              {skill.level}
            </p>
        
            <Link to="update_level" state= { skill } className="material-symbols-outlined" id="updateLevelButton">Update Level</Link>
          </div>
        ))}
    </div>
  );
  
}

export default EnterLevel;
