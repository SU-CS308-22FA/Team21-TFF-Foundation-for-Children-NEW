import "../index.css"
import React from "react"
import logo from "../img/mt-0966-logo.png"
import lifting from "../img/1370177783.jpg"
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
                        <div className="nav">
                            <img src={logo} alt="" />
                            <div id="home"> Home </div>
                            <div id="about"> About </div>
                            <div id="announcements">Announcements </div>
                            <div id="events"> Events </div>
                            <div id="development"> My Development </div>
                        </div>
                    </div>
                    <div className="aboutDescription">
                        
                        <div className="infoBox">
                            <h1> About Header 1 </h1> 
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus deleniti magnam cupiditate odit minus accusantium dignissimos velit quas. Accusantium, id voluptatibus assumenda adipisci aliquam ut? Commodi necessitatibus blanditiis error. </p>
                        </div>
                        <div className="infoBox">
                            <h1> About Header 2 </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iure vero animi, possimus asperiores ipsa quasi fuga. Ab nemo esse aliquam autem! Veritatis dolores quia ex, est perferendis soluta quaerat!</p>
                        </div>
                        <div className="infoBox">
                            <h1> About Header 3 </h1>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fuga impedit dolorem commodi nisi. Illo ducimus nihil doloribus quasi facilis eaque tenetur maxime laboriosam ad, in, repellendus aliquam at obcaecati.</p>
                        </div>
                    </div>
                    <div className="purposeDescription">
                        <img src={lifting} alt="" />
                        <div className="description">
                            <h1> Purpose Header 1 </h1> 
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus deleniti magnam cupiditate odit minus accusantium dignissimos velit quas. Accusantium, id voluptatibus assumenda adipisci aliquam ut? Commodi necessitatibus blanditiis error. </p>
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