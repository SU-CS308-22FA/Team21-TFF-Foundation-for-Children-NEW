import '../index.scss';
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





const Teacher = () => {
  const { user } = useAuthContext();
  const email = user?.email.toString() || 'su';
  return (
    <div className="stuPage">
      <div className="introImage"></div>
      <div className="nav">

      <Avatar {...stringAvatar(email)} />
        <Link to="/" id="link"> Home </Link>

        <Link to="/announcementAdd" id="link">
          Add Announcement{' '}
        </Link>
        <Link to="/announcements" id="link">
          Current Announcements{' '}
        </Link>
        <Link to="/Evaluate" id="link">
          Evaluate Students{' '}
        </Link>
                            
                            <Link to="/selection" id="link">Change Student</Link>
                            <Link to="/teacher/events" id="link"> Events </Link>
                            <Link to="/teacher/trainings" id="link"> Trainings </Link>

      </div>
      <div className="skillContainer">
        <div className="skills">
          <h1>Student Name's Skill Points</h1>
          <div id="img1">
            <h3> Skill Name 1</h3>
            <img src={one} alt="" />
          </div>
          <div id="img2">
            <h3> Skill Name 2</h3>
            <img src={two} alt="" />
          </div>
          <div id="img3">
            <h3> Skill Name 3</h3>
            <img src={three} alt="" />
          </div>
          <div id="img4">
            <h3> Skill Name 4</h3>
            <img src={four} alt="" />
          </div>
          <div id="img5">
            <h3> Skill Name 5</h3>
            <img src={five} alt="" />
          </div>
          <div id="img6">
            <h3> Skill Name 6</h3>
            <img src={six} alt="" />
          </div>
        </div>
      </div>

                       
                        <div className="skillContainer">
                        <div className="skills">
                            <h1>Student Name's Skill Points</h1>
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
              <img src={four} alt="" />
              <div className="eventDate1">
                <h4>April 26, 2022</h4>
              </div>
              <div className="eventName1">
                <h2>Soccer Open Day</h2>
              </div>
              <div className="eventDescription1">
                <p>
                  It is vitally important that the club retains its existing
                  players and attracts new players each season. From early July
                  the club will arrange a Club Open Day ...
                </p>
              </div>
            </div>
            <div className="announcementBox2">
              <img src={five} alt="" />
              <div className="eventDate2">
                <h4>April 26, 2022</h4>
              </div>
              <div className="eventName2">
                <h2>FAI Summer Camp</h2>
              </div>
              <div className="eventDescription2">
                <p>
                  The Football Association of Ireland runs skills-based summer
                  camps at many soccer clubs throughout the country during the
                  summer period.
                </p>
              </div>
            </div>
            <div className="announcementBox3">
              <img src={one} alt="" />
              <div className="eventDate3">
                <h4>April 26, 2022</h4>
              </div>
              <div className="eventName3">
                <h2>Trip to Premiership Match</h2>
              </div>
              <div className="eventDescription3">
                <p>
                  Each season a group of players, parents & coaches travel
                  across to the UK to watch a premiership match. A guided tour
                  of the home stadium is sometimes...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="space">
        <div className="link">
          <Link to="/" className="skillLink" id="link">
            Change Announcement
          </Link>
        </div>
      </div>

      <div className="calendar">
        <h1> Student Name's Calendar </h1>
        <div className="month">
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>
              August
              <br />
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
          <li>
            <span className="active">10</span>
          </li>
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

export default Teacher;
