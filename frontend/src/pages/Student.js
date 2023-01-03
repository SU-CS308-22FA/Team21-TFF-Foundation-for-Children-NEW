import '../index.scss';
import logo from '../img/mt-0966-logo.png';
import { Link } from 'react-router-dom';
import one from '../img/1.jpg';
import two from '../img/2.jpg';
import three from '../img/3.jpg';
import four from '../img/4.jpg';
import five from '../img/5.jpg';
import six from '../img/6.jpg';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect, useState } from "react";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}${name[1]}`,
  };
}






const Student= () => {
    let [calendars, setCalendars]= useState([]);
  const { user } = useAuthContext();
  let email2= user.email;
  const email = user?.email.toString() || 'su';
  useEffect (() => {
    const fetchCalendars= async () =>{
        const response= await fetch('/api/studentcalendar/getStudentCalendar/'+email)
        const json= await response.json();
        setCalendars(json);
    }
    fetchCalendars()
}, [email2]);

let trainingsArray=[];
let eventsArray=[];

for(let x=0; x<calendars.length;x++){
    const calendarType = calendars[x].type.toString();
    if(calendarType==="training"){
        
        const date= new Date(calendars[x].trainingDate);
        const day= date.getDate();
        trainingsArray.push(day);
    }
    else{
        const date= new Date(calendars[x].trainingDate);
        const day= date.getDate();
        eventsArray.push(day);
    }
}
const dayList= document.getElementsByClassName("days")[0];
for(let i=0; i < trainingsArray.length;i++){
    const dayObject= dayList.children[trainingsArray[i]-1];
    dayObject.addEventListener('click', (event)=>{
        window.location.href = '/development';
    });
    dayObject.innerHTML="Training";
}
for(let i=0; i < eventsArray.length;i++){
    const dayObject= dayList.children[eventsArray[i]-1];
    dayObject.innerHTML="Event";
}

    return(
        <div className="stuPage">
                    <div className="introImage">
                        
                       
                    </div>
                    <div className="nav">
                    <Avatar {...stringAvatar(email)} />
                    <Link to="/" id="link">
                          {' '}
                          <img src={logo} alt="" />{' '}
                        </Link>
                        <Link to="/" id="link">
                          {' '}
                          Home{' '}
                        </Link>
                        <Link to="/" id="link">
                          About{' '}
                        </Link>
                        <Link to="/announcements" id="link">
                          Announcements{' '}

                        </Link>
                        <Link to="/Evaluation" id="link">
                          My Evaluation{' '} </Link>

                          <Link to="/development" id="link">
                          My Development{' '}
                        </Link>
                            <Link to="/student/events">Events</Link>
                            <Link to="/student/events/myevents" >My Events </Link>
                        </div>
                        <div className="welcome">
                            <div id="welcomeMessage">
                                Welcome To
                            </div>
                            <div id="projectName">
                                TFF Foundation For Children
                            </div>
                            <div id="greetings">
                            here you will find everything about the best game in the entire world. 
                            Pure emotions, latest news, statisctics in details and much more.
                            </div>
                        </div>
                    <div className="skillContainer">
                        <div className="skills">
                            <h1>My Development</h1>
                            <div id="img1">
                                <h3> Skill Name 1</h3>
                                <img src={one} alt=""/>
                            </div>
                            <div id="img2">
                                <h3> Skill Name 2</h3>
                                <img src={two} alt=""/>
                            </div>
                            <div id="img3">
                                <h3> Skill Name 3</h3>
                                <img src={three} alt=""/>
                            </div>
                            <div id="img4">
                                <h3> Skill Name 4</h3>
                                <img src={four} alt=""/>
                            </div>
                            <div id="img5">
                                <h3> Skill Name 5</h3>
                                <img src={five} alt=""/>
                            </div>
                            <div id="img6">
                                <h3> Skill Name 6</h3>
                                <img src={six} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="skillContainer">
                        <div className="skills">
                            <h1>My Development</h1>
                            <div id="img1">
                                <h3> Skill Name 1</h3>
                                <img src={one} alt=""/>
                            </div>
                            <div id="img2">
                                <h3> Skill Name 2</h3>
                                <img src={two} alt=""/>
                            </div>
                            <div id="img3">
                                <h3> Skill Name 3</h3>
                                <img src={three} alt=""/>
                            </div>
                            <div id="img4">
                                <h3> Skill Name 4</h3>
                                <img src={four} alt=""/>
                            </div>
                            <div id="img5">
                                <h3> Skill Name 5</h3>
                                <img src={five} alt=""/>
                            </div>
                            <div id="img6">
                                <h3> Skill Name 6</h3>
                                <img src={six} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="announcementsContainer">
        
            
                    <div className="announcements">
                        <h1> Latest News </h1>
                        <div className="news">
                            <div className="announcementBox1">
                                <img src={four} alt=""/>
                                <div className="eventDate1">
                                    <h4>April 26, 2022</h4>
                                </div>
                                <div className="eventName1">
                                    <h2>Soccer Open Day</h2>
                                </div>
                                <div className="eventDescription1">
                                    <p>
                                        It is vitally important that the club retains its existing players and attracts new players each season. 
                                        From early July the club will arrange a Club Open Day ...
                                    </p>
                                </div>
                            </div>
                            <div className="announcementBox2">
                                <img src={five} alt=""/>
                                <div className="eventDate2">
                                    <h4>April 26, 2022</h4>
                                </div>
                                <div className="eventName2">
                                    <h2>FAI Summer Camp</h2>
                                </div>
                                <div className="eventDescription2">
                                    <p>
                                        The Football Association of Ireland runs skills-based summer camps at many soccer clubs throughout 
                                        the country during the summer period.
                                    </p>
                                </div>
                            </div>
                            <div className="announcementBox3">
                                <img src={one} alt=""/>
                                <div className="eventDate3">
                                    <h4>April 26, 2022</h4>
                                </div>
                                <div className="eventName3">
                                    <h2>Trip to Premiership Match</h2>
                                </div>
                                <div className="eventDescription3">
                                    <p>
                                        Each season a group of players, parents & 
                                        coaches travel across to the UK to watch a premiership match. A guided tour of the home stadium is sometimes...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calendar">
                <div className="month">
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>August<br/><span>2021</span> </li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className="days">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
        </ul>
      </div>
     
    </div>
  );
};

export default Student;
