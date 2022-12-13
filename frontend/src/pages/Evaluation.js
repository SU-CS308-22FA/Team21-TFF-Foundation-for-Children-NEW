import { Button, Rating, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuthContext } from '../hooks/useAuthContext';
import SendIcon from '@mui/icons-material/Send';
const Evaluation = () => {
  const { user } = useAuthContext();
  const [evaluation, setEvaluation] = useState({
    behaviour: 0,
    communication: 0,
    teamwork: 0,
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedbackMessage(e.target.value);
  };

  const handleSubmitEvaluation = () => {
    fetch('/api/evaluation', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        evaluation: { ...evaluation, objection: feedbackMessage },
      }),
    }).then((response) => {
      if (response.status === 200) {
        setFeedbackMessage('');
      }
    });
  };
  const getStudentEvaluation = () => {
    fetch('/api/evaluation/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvaluation(data[0].evaluations);
      });
  };

  useEffect(() => {
    if (user.email) {
      getStudentEvaluation();
    }
  }, [user.email]);

  const isPermitted = user && user.role === 'Student';
  if (!isPermitted) return <div>Not permitted</div>;

  return (
    <div>
      <Navbar />
      <h1
        style={{ textAlign: 'center', marginBottom: '20px', marginTop: '50px' }}
      >
        Your Evaluation
      </h1>
      <div style={{ textAlign: 'center' }}>
        {evaluation && evaluation.behaviour !== 0 ? (
          <>
            <Typography component="legend">Behaviour Evaluation</Typography>
            <Rating value={evaluation.behaviour} readOnly />
            <Typography component="legend">Teamwork Evaluation</Typography>
            <Rating value={evaluation.teamwork} readOnly />
            <Typography component="legend">Communication Evaluation</Typography>
            <Rating value={evaluation.communication} readOnly />
            <Typography style={{ marginTop: '10px' }}>
              Any objection? Send message to your teacher
            </Typography>
            <div style={{ marginTop: '5px' }}>
              <TextField
                label="Message To Teacher"
                size="small"
                value={feedbackMessage}
                onChange={handleFeedbackChange}
              />
            </div>
            <Button
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              disabled={feedbackMessage === ''}
              onClick={handleSubmitEvaluation}
              style={{ marginTop: '10px' }}
            >
              Send Message
            </Button>
          </>
        ) : (
          <div>Not evaluated yet</div>
        )}
      </div>
    </div>
  );
};

export default Evaluation;
