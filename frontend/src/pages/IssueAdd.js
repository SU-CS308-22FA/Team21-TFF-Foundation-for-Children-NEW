import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Alert, MenuItem, Select, Snackbar } from '@mui/material';

const IssueAdd = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [issueType, setIssueType] = useState('General');

  const handleChange = (event) => {
    setIssueType(event.target.value);
  };

  const addIssue = (event) => {
    const date = new Date();
    event.preventDefault();
    fetch('/api/issue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, issueType, date }),
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
          Issue added!
        </Alert>
      </Snackbar>
      <form className="login" onSubmit={addIssue}>
        <h3>Issue</h3>

        <label>Issue Topic:</label>
        <input
          type="text"
          name="issueTopic"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label>Explanation:</label>
        <textarea
          rows="5"
          type="text"
          name="yourMessage"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          style={{ width: '100%' }}
        />

        <div style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label style={{ marginBottom: '10px' }}>Issue Type</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={issueType}
            label="Issue Type?"
            onChange={handleChange}
          >
            <MenuItem value={'General'}>General</MenuItem>
            <MenuItem value={'Bug Report'}>Bug Report</MenuItem>
            <MenuItem value={'Others'}>Others</MenuItem>
          </Select>
        </div>

        <button>Report Issue</button>
      </form>
    </div>
  );
};
export default IssueAdd;
