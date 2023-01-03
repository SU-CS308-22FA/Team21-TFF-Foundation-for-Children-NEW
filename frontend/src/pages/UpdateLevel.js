import { useEffect, useState } from "react";
import { useEventContext } from "../hooks/useEventContext"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLocation } from 'react-router-dom';
import { useParams} from 'react-router-dom';
const UpdateLevel = () =>{
    const { user } = useAuthContext();
    let location2 = useLocation();
    let skillData = location2.state;
    console.log("skilldataaa: ", skillData);
    const id = skillData._id;
    console.log("skill id: ", id);
    console.log(skillData);
    const [emptyFields, setEmptyFields] = useState([])
    const[skillLevel, setSkillLevel] = useState(0);
    const [error, setError] = useState(null)

    useEffect(()=>{
        getSkillDetails();

    },[])

    const getSkillDetails = async() => {
        console.log(skillData.skillLevel);
        setSkillLevel(skillData.skillLevel);

    }

    const handleSubmit = async (e) => {
        e.preventDefault() // prevent to take action when the page was refreshed.
        if (!user) {
            setError('You must be logged in')
            return
        }
        console.log("level: ", skillLevel)

        const newskill = { id: id, level: Number(skillLevel) }
        try {
            const response = await fetch("/api/skill/updateSkill", {
              method: 'PATCH',
              body: JSON.stringify(newskill),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
              },
            });
            const json = await response.json();
            if (!response.ok) {
              setError(json.error);
            }
            if (response.ok) {
              setSkillLevel('');
              setError(null);
              console.log('Skill level updated', json);
            }
          } catch (error) {
            console.error(error);
          }
    }


    
   

    return (
        <div>
      <h1>Update Skill Level</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter the measured level of the student for this skill:</label>
        <input
          type="text"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className={emptyFields.includes('skillLevel') ? 'error' : ''}
        />
        <button type="submit">Update Skill</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
      );
      
}
export default UpdateLevel;