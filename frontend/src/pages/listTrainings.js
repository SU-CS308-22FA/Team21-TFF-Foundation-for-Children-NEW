import { useAuthContext } from '../hooks/useAuthContext';
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import TrainingDetails from '../components/TrainingDetails'
import { useTrainingContext } from "../hooks/useTrainingContext";

const ListTrainings =  () => {
  const { trainings, dispatch } = useTrainingContext() 
  const {user} = useAuthContext()

    useEffect(() => {  // useEffect hook fires a function when the EventsTabOnTeacher component is rendered.
        const fetchTrainings= async () =>{
          const response= await fetch('/api/training/getTrainings', {
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json= await response.json() // json contains an array of event objects.
          if(response.ok){
            console.log("fetchTrainings ok")
            dispatch({type: 'VIEW_TRAINING', payload: json})// remember, the payload should be an array of events. json is an array of events here.
          }
        }
        if (user) {
        fetchTrainings()
        }
    }, [dispatch, user])
    return (
      <div className="Trainings">
          <Navbar/>
          
            <h1> Trainings </h1>
            <Link to="create" id="create">Create training</Link>
          {trainings && trainings.map((training) =>(<TrainingDetails key={training._id} training = {training} />))}
      </div>
    );
    
}

export default ListTrainings


