import "../index.css"
import React from "react"

const Student= () => {


    return(
        <div className="stuPage">



            <div className="profileContainer">
                <div id="userBox">
                    <h3>user name</h3>
                </div>
                <div id="profileBox">
                    <h3>My Profile</h3>
                </div>
                <div id="logoutBox">
                    <h3>Log out</h3>
                </div>
            </div>
            <div className="personalDataBox">
                <div id="announcementBox">
                    <h3>Announcements</h3>
                </div>
                <div id="eventBox">
                    <h3>Events</h3>
                </div>
                <div id="developmentBox">
                    <h3>My Developments</h3>
                </div>
            </div> 
            <div className="informationContainer">
                <div id="infoBox">
                    <h1> HEADER 1 </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur placeat hic similique accusantium aut excepturi impedit consequuntur est aliquam ullam nam dicta magnam, laudantium, ea quia. Quos, ipsam omnis.</p>
                </div>
                <div id="infoBox">
                    <h1> HEADER 2 </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur placeat hic similique accusantium aut excepturi impedit consequuntur est aliquam ullam nam dicta magnam, laudantium, ea quia. Quos, ipsam omnis.</p>
                </div>
                <div id="infoBox">
                    <h1> HEADER 3 </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur placeat hic similique accusantium aut excepturi impedit consequuntur est aliquam ullam nam dicta magnam, laudantium, ea quia. Quos, ipsam omnis.</p>
                </div>
            </div>
            <div className="calendar">
                <div className="month">      
                    <ul>
                    <li className="prev">&#10094;</li>
                    <li className="next">&#10095;</li>
                    <li>
                        August<br/>
                        <span>2021</span>
                    </li>
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
                    <li>31</li>
                </ul>
            </div>

        </div>

        
        

    )
}

export default Student