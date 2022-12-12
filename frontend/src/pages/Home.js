import "../index.css"
import React from "react"
import lifting from "../img/lifting.jpg"
import Navbar from "../components/Navbar"
import c1 from "../img/c1.jpg"
import c2 from "../img/c2.jpg"
import c3 from "../img/c3.jpg"
import c4 from "../img/c4.jpg"

import { useAuthContext } from "../hooks/useAuthContext";


const Home= ()=> {
    const { user } = useAuthContext();
    const userName = user?.userName.toString() || "";
    fetch()
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log("Not Successful")
        }
    })

    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))




return(
                    <div className="homePage">

                        <Navbar/>
                        <div className="aboutDescription">
                            <h1>Welcome {userName}</h1>
                            <h2>ANNOUNCEMENTS</h2>
                        <iframe src="/Announcements" title="W3Schools Free Online Web Tutorials"></iframe>

                    </div>
                    <div className="purposeDescription">
                        <img src={lifting} alt="" />
                        <div className="description">
                            <h1> WHY US? </h1> 
                            <p> Please keep reading for details. To be updated... </p>
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