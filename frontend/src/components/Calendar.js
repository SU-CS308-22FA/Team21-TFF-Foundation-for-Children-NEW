import React from 'react'

const Calendar= ({calendars}) => {
    
    return(
       
        <div className='calendarContainer'>
            {calendars && calendars.map((calendar) =>(
                document.getElementById(calendar.datenumber).innerHTML= calendar.trainingname
                
                
              ))}
            <div className="calendar">
                    <h1> Student Name's Calendar </h1>
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
                    <li id="1">1</li>
                    <li id="2">2</li>
                    <li id="3">3</li>
                    <li id="4">4</li>
                    <li id="5">5</li>
                    <li id="6">6</li>
                    <li id="7">7</li>
                    <li id="8">8</li>
                    <li id="9">9</li>
                    <li id="10">10</li>
                    <li id="11">11</li>
                    <li id="12">12</li>
                    <li id="13">13</li>
                    <li id="14">14</li>
                    <li id="15">15</li>
                    <li id="16">16</li>
                    <li id="17">17</li>
                    <li id="18">18</li>
                    <li id="19">19</li>
                    <li id="20">20</li>
                    <li id="21">21</li>
                    <li id="22">22</li>
                    <li id="23">23</li>
                    <li id="24">24</li>
                    <li id="25">25</li>
                    <li id="26">26</li>
                    <li id="27">27</li>
                    <li id="28">28</li>
                    <li id="29">29</li>
                    <li id="30">30</li>
                    </ul>
                </div>
        </div>
    )
}

export default Calendar