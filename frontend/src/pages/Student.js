import "../index.css"
import React from "react"

const Student= () => {


    return(
        <div className="stuPage">



            <div class="introImage">
                        <div class="nav">
                            <img src="./img/mt-0966-logo.png" />
                            <div id="home"> Home </div>
                            <div id="about"> About </div>
                            <div id="announcements">Announcements </div>
                            <div id="events"> Events </div>
                            <div id="development"> My Development </div>
                        </div>
                    </div>
                    <div class="aboutDescription">
                        
                        <div class="infoBox">
                            <h1> About Header 1 </h1> 
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus deleniti magnam cupiditate odit minus accusantium dignissimos velit quas. Accusantium, id voluptatibus assumenda adipisci aliquam ut? Commodi necessitatibus blanditiis error. </p>
                        </div>
                        <div class="infoBox">
                            <h1> About Header 2 </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iure vero animi, possimus asperiores ipsa quasi fuga. Ab nemo esse aliquam autem! Veritatis dolores quia ex, est perferendis soluta quaerat!</p>
                        </div>
                        <div class="infoBox">
                            <h1> About Header 3 </h1>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fuga impedit dolorem commodi nisi. Illo ducimus nihil doloribus quasi facilis eaque tenetur maxime laboriosam ad, in, repellendus aliquam at obcaecati.</p>
                        </div>
                    </div>
                    <div class="purposeDescription">
                        <img src="./img/1370177783.jpg" />
                        <div class="description">
                            <h1> Purpose Header 1 </h1> 
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus deleniti magnam cupiditate odit minus accusantium dignissimos velit quas. Accusantium, id voluptatibus assumenda adipisci aliquam ut? Commodi necessitatibus blanditiis error. </p>
                        </div>
                    </div>

                    <div class="skillContainer">
                        <div class="skills">
                            <h1>My Development</h1>
                            <div id="img1">
                                <h3> Skill Name 1</h3>
                                <img src="../"/>
                            </div>
                            <div id="img2">
                                <h3> Skill Name 2</h3>
                                <img src="img/2.jpg"/>
                            </div>
                            <div id="img3">
                                <h3> Skill Name 3</h3>
                                <img src="img/3.jpg"/>
                            </div>
                            <div id="img4">
                                <h3> Skill Name 4</h3>
                                <img src="img/4.jpg"/>
                            </div>
                            <div id="img5">
                                <h3> Skill Name 5</h3>
                                <img src="img/5.jpg"/>
                            </div>
                            <div id="img6">
                                <h3> Skill Name 6</h3>
                                <img src="img/6.jpg"/>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="announcementsContainer">
        
            
                    <div class="announcements">
                        <h1> Latest News </h1>
                        <div class="news">
                            <div class="announcementBox1">
                                <img src="img/4.jpg"/>
                                <div class="eventDate1">
                                    <h4>April 26, 2022</h4>
                                </div>
                                <div class="eventName1">
                                    <h2>Soccer Open Day</h2>
                                </div>
                                <div class="eventDescription1">
                                    <p>
                                        It is vitally important that the club retains its existing players and attracts new players each season. 
                                        From early July the club will arrange a Club Open Day ...
                                    </p>
                                </div>
                            </div>
                            <div class="announcementBox2">
                                <img src="img/5.jpg"/>
                                <div class="eventDate2">
                                    <h4>April 26, 2022</h4>
                                </div>
                                <div class="eventName2">
                                    <h2>FAI Summer Camp</h2>
                                </div>
                                <div class="eventDescription2">
                                    <p>
                                        The Football Association of Ireland runs skills-based summer camps at many soccer clubs throughout 
                                        the country during the summer period.
                                    </p>
                                </div>
                            </div>
                            <div class="announcementBox3">
                                <img src="img/1.jpg"/>
                                <div class="eventDate3">
                                    <h4>April 26, 2022</h4>
                                </div>
                                <div class="eventName3">
                                    <h2>Trip to Premiership Match</h2>
                                </div>
                                <div class="eventDescription3">
                                    <p>
                                        Each season a group of players, parents & 
                                        coaches travel across to the UK to watch a premiership match. A guided tour of the home stadium is sometimes...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        
        

    )
}

export default Student