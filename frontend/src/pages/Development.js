// <block:setup:1>
import React from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import {Bar} from "react-chartjs-2";
import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";

import { useEffect, useState } from "react";









const BarChart =  ()  => {
  const { user } = useAuthContext();
 
    
    const [calendars, setCalendars] = useState(null);
    
    useEffect(() => {
        
        const fetchCalendars= async () =>{
        
        const response= await fetch('/api/studentcalendar/getStudentCalendar'+user.email)
        const json= await response.json()
            if(response.ok){
                setCalendars(json)    
            }
        }
        fetchCalendars()
    }, [])
   
    //console.log(calendars)
 
    let calendarsArray=[]
    let indexes=[]
    const getCalendars = async ()=>{
      
      let calendarArray=[]
      let day
      let level=0
      for (const calendar of calendars){
        level+=2
        
        calendarArray=[]
        for(const skill of calendar.skills){
          level+=1
          let exist=false
          try{
            //console.log("fetching skill data..")
            const response= await fetch('/api/skill/getSkill/'+skill)
            if(!response.ok){
              //console.log("not ok")
            }
            const json= await response.json()
            if(response.ok){
              json.level=level
              let date = new Date(json.skillDate);
              day = date.getDate();
              for(let i=0; i < indexes.length;i++){
                if(indexes[i]==day){
                  exist=true
                }
              }
              if(!exist){
                indexes.push(day)
              }
              
              //console.log(json.skillDate)
              calendarArray.push(json)
             
            }
          }
          catch(error){
            //console.log("there are errors")
          }
          
          
        }
        
        calendarsArray[day]=calendarArray
      }
      
    }
    getCalendars()
    console.log(calendarsArray)
    console.log(indexes)
    
    const labels = indexes;
  const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: calendarsArray,
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

