import { Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuthContext } from '../hooks/useAuthContext';

const Evaluation = () => {
  const { user } = useAuthContext();

  console.log(user);

  const [evaluation, setEvaluation] = useState({
    behaviour: 0,
    communication: 0,
    teamwork: 0,
  });

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
         
        setEvaluation(data[0].evaluations[0]);
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
        <Typography component="legend">Behaviour Evaluation</Typography>
        <Rating value={evaluation.behaviour} readOnly />
        <Typography component="legend">Teamwork Evaluation</Typography>
        <Rating value={evaluation.teamwork} readOnly />
        <Typography component="legend">Communication Evaluation</Typography>
        <Rating value={evaluation.communication} readOnly />
      </div>
    </div>
  );
};

export default Evaluation;
