import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Alert, Snackbar } from '@mui/material';

const AnnouncementAdmin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuthContext();
  const addAnnouncement = (event) => {
    event.preventDefault();
    fetch('/api/announcement', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    }).then((response) => {
      setShowAlert(true);
      setTitle('');
      setContent('');
    });
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  if (user && user.role === 'Teacher') {
    return (
      <div className="loginContainer">
        <Navbar />
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="success"
            sx={{ width: '100%' }}
          >
            Announcement added!
          </Alert>
        </Snackbar>
        <form className="login" onSubmit={addAnnouncement}>
          <h3>Announcements</h3>

          <label>Announcement Title:</label>
          <input
            type="text"
            name="announcementTitle"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <label>Announcement Content:</label>
          <textarea
            rows="5"
            type="text"
            name="announcementContent"
            onChange={(event) => setContent(event.target.value)}
            value={content}
            style={{ width: '100%' }}
          />

          <button>Add Announcement</button>
          <Link to="/announcements" id="link">
            Announcements{''}
          </Link>
        </form>
      </div>
    );
  }
  return <div>You don't have permission to see this</div>;
};
export default AnnouncementAdmin;
