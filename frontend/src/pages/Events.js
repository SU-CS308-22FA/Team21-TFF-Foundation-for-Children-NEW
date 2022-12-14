import React from "react"
import { Link } from "react-router-dom"

import { useEvents } from "../hooks/useEvents"
import one from "../img/1.jpg"
import two from "../img/2.jpg"
import three from "../img/3.jpg"
const Events = () =>  {
    const {events} = useEvents()
    const handleClickScroll = (event) => {
        const element = document.getElementById(event.target.name);
        console.log(event.target.name)
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
          }
    }

    return (


        <div className="eventPageContainer">
            <h1 id="h3">ALL EVENTS</h1>

            <div className="eventsContainer">

                <div className="event">
                    <Link to="/student/events" id="eventLink1" name="content1" onClick={handleClickScroll}> Antalya Winter Camp 2023 </Link>
                </div>
                <div className="event">
                    <Link to="/student/events" id="eventLink2" name="content2" onClick={handleClickScroll}> Football Match after this Friday's training </Link>
                </div>
                <div className="event">
                    <Link to="/student/events" id="eventLink3" name="content3" onClick={handleClickScroll}> Meet Arda Güler </Link>
                </div>
                <div className="event">
                    <Link to="/student/events" id="eventLink4" name="content4" onClick={handleClickScroll}> Fenerbahçe-Galatasaray Derby </Link>
                </div>
                
                
            </div> 
            <div className="eventContent" id="content1">
                    <div className="eventHeader">
                  
                            Antalya Winter Camp 2023
                      
                    </div>
                    <div className="eventContent2">
                                        TFF Foundation For Children runs skills-based winter camp between 15th and 19th of October. 
                                        Accomadation will be at "Rixos Premium Belek". You will be educated by Fenerbahçe players during the camp. 
                                        If you want to join, please contact your teacher. 
                                        The camp is for no charge.
                        
                    </div>
                    
                    
                    <div className="eventImage">
                        <img src={one} alt=""/>
                        
                    </div>
                    
            </div>
            <div className="eventContent" id="content2">
                    <div className="eventHeader">
                        Football Match after this Friday's training
                      
                    </div>
                    <div className="eventContent2">
                    We will go to stadium after a not too much tiring training. 
                    The first 22 of you who applied first, we be the first players. Be quick!
                            
                        
                    </div>
                    
                    
                    <div className="eventImage">
                        <img src={two} alt=""/>
                        
                    </div>
                    
            </div>
            <div className="eventContent" id="content3">
                    <div className="eventHeader">
                        Meet Arda Güler
                      
                    </div>
                    <div className="eventContent2">
                    The event is open for everybody in Football School. Participants will be informed later.
                    Contact your teacher.
                            
                        
                    </div>
                    
                    
                    <div className="eventImage">
                        <img src={three} alt=""/>
                        
                    </div>
                    
            </div>
            <div className="eventContent" id="content4">
                    <div className="eventHeader">
                        Fenerbahçe-Galatasaray Derby
                      
                    </div>
                    <div className="eventContent2">
                        We will watch the derby in Şimbilli Çay Bahçesi. Get your snacks! It is on 8th of October.
                            
                        
                    </div>
                    
                    
                    <div className="eventImage">
                        <img src={one} alt=""/>
                        
                    </div>
                    
            </div>
         

            

        </div> 
    )

}

export default Events