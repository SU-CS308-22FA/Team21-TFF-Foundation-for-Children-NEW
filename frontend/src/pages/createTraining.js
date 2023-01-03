import Navbar from "../components/Navbar"
import { useState } from "react";
import { useTrainingContext } from "../hooks/useTrainingContext"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'


const CreateTraining = () => {
    const { dispatch } = useTrainingContext()
    const { user } = useAuthContext()
    const[trainingName, settrainingName] = useState('');
    const[date, setdate] = useState('');
    const [skills, setSkills] = useState([""]);
    const [error, setError] = useState(null)


    const handleSkillChange = (e, index) => {
        const newSkills = [...skills];
        newSkills[index] = e.target.value;
        setSkills(newSkills);
    };

    const handleAddSkill = () => {
        setSkills([...skills, ""]);
    };


    const handleSubmit = async (e) => {
        e.preventDefault() // prevent to take action when the page was refreshed.
        if (!user) {
            setError('You must be logged in')
            return
        }

        const training = {trainingName,date,skills};
      
        const response = await fetch('/api/training/addTraining', {
            method: 'POST',
            body: JSON.stringify(training),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // make the form empty again
            settrainingName("")
            setdate("")
            setError(null)
            dispatch({type: 'ADD_TRAINING', payload: json})
<<<<<<< Updated upstream
=======
            console.log("new training is added (json), ", json)
>>>>>>> Stashed changes
            
        }
    }

    return (
        <div className="addeventContainer">
            <Navbar />
            <form className="addevent" onSubmit={handleSubmit}>
                <br /> <br />
                <label>Training Name (optional): </label>
                <input
                    type="trainingName"
                    onChange={(e) => settrainingName(e.target.value)}
                    value={trainingName}
                />
                <br /> <br />
                <label>Date (required):</label>
                <input
                    type="date"
                    onChange={(e) => setdate(e.target.value)}
                    value={date}
                />
                <br />
                <label>Skills (optional):</label>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange(e, index)}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddSkill}>
                    Add Skill
                </button>
                <button type="submit">Create training</button>
                {error && <div className="error">{error}</div>}
            </form>
            <Link to="/teacher/trainings" id="returneventsbutton">
                Return to all trainings
            </Link>
        </div>
    );
};

export default CreateTraining;