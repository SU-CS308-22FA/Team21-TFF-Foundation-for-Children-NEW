import "../index.css"
import React from "react"
import lifting from "../img/lifting.jpg"
import Navbar from "../components/Navbar"
import c1 from "../img/c1.jpg"
import c2 from "../img/c2.jpg"
import c3 from "../img/c3.jpg"
import c4 from "../img/c4.jpg"
const Home= ()=> {
return(
                    <div className="homePage">
                        <Navbar/>
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
                    <div className="teacherContainer">
                        <h1>Our Trainers</h1>
                        <div className="coachContainer">
                            <div className="coachInformation">
                                <img src={c1}></img>
                                <div className="coachName">Andrea Haywood</div>
                                <div className="coachRole">Assistant coach</div>
                                <div className="coachInfo">He is an assistant coach & goalie coach for the women's team</div>
                            </div>
                            <div className="coachInformation">
                                <img src={c2}></img>
                                <div className="coachName">Andy Collins</div>
                                <div className="coachRole">Staff Coach</div>
                                <div className="coachInfo">He started coaching with the U10 girls and now the U12 girls.</div>
                            </div>
                            <div className="coachInformation">
                                <img src={c3}></img>
                                <div className="coachName">Marilynn Smith</div>
                                <div className="coachRole">Goalkeeper</div>
                                <div className="coachInfo">Marilynn possess a Level 2 certificate from the NSCAA.</div>
                            </div>
                            <div className="coachInformation">
                                <img src={c4}></img>
                                <div className="coachName">Louis Ellis</div>
                                <div className="coachRole">Head coach</div>
                                <div className="coachInfo">Louis is a head coach of our club Soccer team since 2008</div>
                            </div>
                        </div>

                    </div>
                    </div>
)
}
export default Home