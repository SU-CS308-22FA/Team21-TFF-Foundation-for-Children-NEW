import "../index.css"
import React from "react"
import logo from "../img/mt-0966-logo.png"
import '../index.css'
import { Link } from 'react-router-dom'
import one from "../img/1.jpg"
import two from "../img/2.jpg"
import three from "../img/3.jpg"
import four from "../img/4.jpg"
import five from "../img/5.jpg"
import six from "../img/6.jpg"

const Student= () => {
    
   
  
    return(
        <div className="stuPage">
                    <div className="introImage">
                        
                       
                    </div>
                    <div className="nav">
                        <Link to="/" id="link"> <img src={logo} alt="" /> </Link>
                            
                            <Link to="/" id="link"> Home </Link>
                            
                            <Link to="/" id="link">About </Link>
                            <Link to="/" id="link">Announcements </Link>
                            <Link to="/student/events">Events</Link>
                            <Link to="/" id="link">My Development </Link>
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
                                <Link to="/Skills/skill1"> Skill Name 1</Link>
                                <img src={one} alt=""/>
                            </div>
                            <div id="img2">
                                <Link to="/Skills/skill2"> Skill Name 2</Link>
                                <img src={two} alt=""/>
                            </div>
                            <div id="img3">
                                <Link to="/Skills/skill3"> Skill Name 3</Link>
                                <img src={three} alt=""/>
                            </div>
                            <div id="img4">
                                <Link to="/Skills/skill4"> Skill Name 4</Link>
                                <img src={four} alt=""/>
                            </div>
                            <div id="img5">
                                <Link to="/Skills/skill5"> Skill Name 5</Link>
                                <img src={five} alt=""/>
                            </div>
                            <div id="img6">
                                <Link to="/Skills/skill6"> Skill Name 6</Link>
                                <img src={six} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="skillContainer">
                        <div className="skills">
                            <h1>My Development</h1>
                            <div id="img1">
                                <Link to="/Skills/skill1"> Skill Name 1</Link>
                                <img src={one} alt=""/>
                            </div>
                            <div id="img2">
                                <Link to="/Skills/skill2"> Skill Name 2</Link>
                                <img src={two} alt=""/>
                            </div>
                            <div id="img3">
                                <Link to="/Skills/skill3"> Skill Name 3</Link>
                                <img src={three} alt=""/>
                            </div>
                            <div id="img4">
                                <Link to="/Skills/skill4"> Skill Name 4</Link>
                                <img src={four} alt=""/>
                            </div>
                            <div id="img5">
                                <Link to="/Skills/skill6"> Skill Name 5</Link>
                                <img src={five} alt=""/>
                            </div>
                            <div id="img6">
                                <Link to="/Skills/skill6"> Skill Name 6</Link>
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
                        <li>August<br/><span>2021</span></li>
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
                        <li><span className="active">10</span></li>
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

        
        

    )
}



export default Student