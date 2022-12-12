import './Announcements.scss';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const getAnnouncements = () => {
    fetch('/api/announcement')
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
      });
    console.log(announcements);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <div className="loginContainer">
    
      <div className="announcement">
        {announcements.map((ann) => {
          return (
            <div className="announcement-item" key={ann._id}>
              <h3>{ann.title}</h3>
              <p>{ann.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Announcements;
