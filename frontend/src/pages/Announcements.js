import './Announcements.scss';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import AnnouncementItem from './AnnouncementItem';
import { useAuthContext } from '../hooks/useAuthContext';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();

  const userRole = user && user.role;

  const isPermittedToEdit = userRole === 'Teacher';


  const getAnnouncements = () => {
    fetch('/api/announcement')
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  if (isLoading)
    return (
      <CircularProgress
        style={{
          margin: 'auto',
          marginTop: '75px',
          height: '95%',
          display: 'flex',
        }}
      />
    );

  return (
    <div className="loginContainer">
      <div className="announcement">
        {announcements.map((ann) => {

          if (ann.permitted === 'Teacher' && userRole !== 'Teacher')
            return null;
          if (
            ann.permitted === 'Student' &&
            userRole !== 'Student' &&
            userRole !== 'Teacher'
          )
            return null;

          if (!ann.content) return null;
          return (
            <AnnouncementItem
              ann={ann}
              isPermitted={isPermittedToEdit}

              key={ann._id}
              getAnnouncements={getAnnouncements}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Announcements;
