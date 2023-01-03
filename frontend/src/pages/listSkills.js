import { useSkillContext } from "../hooks/useSkillContext";
import SkillDetails from '../components/SkillDetails'
import { useAuthContext } from '../hooks/useAuthContext';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
/* hangi skill,'lerin hangi traininglerde olduğunu ve hangi traininglerin hangi öğrencilerde olduğunu bilmem lazım*/
const ListSkills =  () => {
  const { skills, dispatch } = useSkillContext() 
  const {user} = useAuthContext()

    useEffect(() => {  // useEffect hook fires a function when the EventsTabOnTeacher component is rendered.
        const fetchSkills= async () =>{
          const response= await fetch('/api/skill/getSkills', {
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json= await response.json() // json contains an array of event objects.
          if(response.ok){
            //console.log("fetchSkills ok")
            dispatch({type: 'VIEW_SKILL', payload: json})
          }
        }
        if (user) {
        fetchSkills()
        }
    }, [dispatch, user])
    return (
      <div className="Skills">
          <Navbar/>
          
            <h1> Skills </h1>
            <Link to="create" id="addEventButtononEventTab">Create skill</Link>
          {skills && skills.map((skill) =>(<SkillDetails key={skill._id} skill = {skill} />))}
      </div>
    );
    
}

export default ListSkills


