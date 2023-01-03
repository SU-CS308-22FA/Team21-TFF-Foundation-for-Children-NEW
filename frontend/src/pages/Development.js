
import React from "react";
import axios from "axios";
import { useAuthContext } from '../hooks/useAuthContext'
import {Bar} from "react-chartjs-2";
import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";

import { useEffect, useState } from "react";
















const BarChart =  ()  => {
  
 
  //let skillIds=[]

  const { user } =  useAuthContext();
  const email= user.email;
  //const [data, setData]= useState({});
 
  const [skills, setSkills]= useState([]);
  

  useEffect(() => {

    const fetchSkills= async ()=> {
      const response= await fetch('/api/skill/getStudentSkills/'+email)
      const json= await response.json()
      setSkills(json);
    };
    fetchSkills();
    }, [email]);
   
  
    const uniqueSkillNames= Object.keys(skills);
    
    function getTrainingData(name){
      let trainingData= skills[name];
      let avarage=0;
      let days=0;
      for(const data of trainingData){
        avarage+= data.level;
        days++;
      }
      return (avarage/days);
    }
    let avarages=[];
    for(let k=0; k< uniqueSkillNames.length;k++){
      let avarage= getTrainingData(uniqueSkillNames[k]);
      avarages.push(avarage);
    }
    const data = {
      labels: uniqueSkillNames,
      datasets: [{
        label: "Avarages",
        data: avarages,
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
    


    function createChartData(name){
      let trainingData= skills[name];
      
      let days=[];
      let levels=[];
    
      for(const data of trainingData){
        
        const date = new Date(data.skillDate);
        const day = date.getDate();
        days.push(day);
        levels.push(data.level);

      }
      
      const data2 = {
        labels: days,
        datasets: [{
          label: name,
          data: levels,
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
      return data2;
    }
    let chartDatas=[]
    for(let i=0; i< uniqueSkillNames.length;i++){
      chartDatas.push(createChartData(uniqueSkillNames[i]));
    }   
    
  



   
    function initialize(trainingName){
      let trainingData= skills[trainingName];
      
      let days=[];
      let levels=[];
    
      for(const data of trainingData){
        
        const date = new Date(data.skillDate);
        const day = date.getDate();
        days.push(day);
        levels.push(data.level);

      }
      
      
      
      
      //const data2=createChart(levels, days, trainingName);
      /*
      setData(data2);
      const barDiv=document.getElementById("BarChart");
      const bar= document.createElement("Bar");
      bar.setAttribute("data", data);
      bar.setAttribute("id", "barChart")
      barDiv.appendChild(bar);*/
    }
    
    //initialize(uniqueSkillNames[3])
    
    const  options = {
      scales: {
        y: {
          title: {
            display: true,
            text: 'LEVELS'
          }
        },
        x:{
          title:{
            display:true,
            text:'DAYS'
          }
        }
      }     
    }
    function borderCheck(event){
      let trainingName=event.target.getAttribute('name')
      let element= document.getElementsByClassName("tabLine")
      if (element.length > 0) {
        element[0].classList.remove("tabLine");
      } 
      event.currentTarget.classList.add("tabLine")
      
      for(let i=0; i < uniqueSkillNames.length; i++){
        const chartDiv= document.getElementById(uniqueSkillNames[i]);
        chartDiv.style.display="none";
        
      }
      const avarages= document.getElementById("barChartAvarage");
      avarages.style.display="none";
      const chartDiv= document.getElementById(trainingName);
      chartDiv.style.display="block";
      
      //setData(data2);
      //const bar=document.getElementById("barChart");
      //bar.setAttribute("data",data2);
    };
    function showAvarage(event2){
      
      for(let i=0; i < uniqueSkillNames.length; i++){
        const chartDiv= document.getElementById(uniqueSkillNames[i]);
        chartDiv.style.display="none";
        
      }
      const avarages= document.getElementById("barChartAvarage");
      avarages.style.display="block";

    }
let count=0;
    return (
        <div className="developmentPage">
            <div id="developmentNavbar" className="developmentNavbar" >
            
              {uniqueSkillNames.map(name=>(
                <div name={name} className="trainingEntry" onClick={(event) => {borderCheck(event)}}>
                  {name}
                  
                </div>
                
              ))}  
              <div name="avarages" id= "avarages" className="avarages"  onClick={(event2) => {showAvarage(event2)}}>
                show avarages
                
              </div>
            </div>
            {chartDatas.map(data =>(
              <div id={uniqueSkillNames[count]} className="BarChart">
                <Bar id="barChart" data={data} options={options} />
                {count++}
              </div>
            ))}
            <Bar id="barChartAvarage" data={data} options={options} />
            
        </div>
    )
  }


export default BarChart

// </block:config>

/*
<div id="BarChart" className="BarChart">
              <Bar id="barChart" data={dataSample} />
            </div>
            */