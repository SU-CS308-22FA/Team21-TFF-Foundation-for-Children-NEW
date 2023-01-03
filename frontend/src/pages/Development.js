// <block:setup:1>
import React from "react";
import axios from "axios";
import { useAuthContext } from '../hooks/useAuthContext'
import {Bar} from "react-chartjs-2";
import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";

import { useEffect, useState } from "react";
















const BarChart =  ()  => {
  
 
  let skillIds=[]

  const { user } =  useAuthContext();
  const email= user.email
    
    const [calendars, setCalendars] = useState([]);
  
    const [skills, setSkills] = useState([]);
    useEffect(() =>  {
        
        const fetchCalendars= async () =>{
        
        const response= await fetch('/api/studentcalendar/getStudentCalendar/'+email)
        const json= await response.json()
        //const jsonstring= JSON.stringify(json)
        
        setCalendars(json)
        
        
        
        }
        fetchCalendars()
    }, [email])
    

    
   console.log(calendars)
   for(const calendar of calendars){
    skillIds.push(calendar.skills)
   }
   console.log(skillIds)
   useEffect(() => {
    const fetchSkills = async () => {
    
    const response = await fetch('/api/skill/getSkillList?'+ new URLSearchParams({
      skills: skillIds
    }));
    const data = await response.json();
    setSkills(data);
  };
  fetchSkills();
  }, [skillIds]);
 
   
   
   
   
    
 
    
   
    
  const data = {
  labels: [1,2],
  datasets: [{
    label: 'My First Dataset',
    data: [10,5],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
// </block:setup>

// <block:config:0>
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
    
   


    function borderCheck(event){
        document.getElementsByClassName("tabLine")[0].classList.remove("tabLine")
        event.currentTarget.classList.add("tabLine")
    }

    return (
        <div className="developmentPage">
            <div id="developmentNavbar" className="developmentNavbar" >
                
                <div className="trainingEntry tabLine" onClick={event => borderCheck(event)}>
                  training A
                </div>
                <div className="trainingEntry" onClick={event => borderCheck(event)}>
                  training B
                </div>
              
            </div>
            
            <div className="BarChart">
                <Bar data={data} />
            </div>
        </div>
    )
  }


export default BarChart

// </block:config>

