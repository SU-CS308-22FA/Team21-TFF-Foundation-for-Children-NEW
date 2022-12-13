import './Evaluation.scss';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Rating,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import DeleteIcon from '@mui/icons-material/Delete';

const Evaluate = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');

  const { user } = useAuthContext();

  const isPermitted = user && user.role === 'Teacher';

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalClose = () => {
    setModal(false);
  };

  const handleModalOpen = (content) => {
    setModal(true);
    setModalContent(content);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const getEvaluations = () => {
    fetch('/api/evaluation')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setIsLoading(false);
        console.log(data);
      });
  };

  useEffect(() => {
    getEvaluations();
  }, []);

  const [behaviour, setBehaviour] = useState(0);
  const [teamwork, setTeamwork] = useState(0);
  const [communication, setCommunication] = useState(0);

  const handleResetEvaluation = () => {
    setModal(false);
    setBehaviour(0);
    setTeamwork(0);
    setCommunication(0);
    getEvaluations();
  };

  if (!isPermitted) return <div>No permission</div>;

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

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    p: 4,
    zIndex: 1000,
    textAlign: 'center',
  };

  const handleSubmitEvaluation = (event) => {
    event.preventDefault();
    fetch('/api/evaluation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: modalContent._id,
        evaluation: {
          behaviour: behaviour,
          teamwork: teamwork,
          communication: communication,
        },
      }),
    }).then((response) => {
      handleResetEvaluation();
    });
  };

  const handleDeleteEvaluation = () => {
    fetch('/api/evaluation', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: modalContent._id,
        evaluation: {

          behaviour: modalContent.evaluations.behaviour,
          teamwork: modalContent.evaluations.teamwork,
          communication: modalContent.evaluations.communication,

        },
      }),
    }).then((response) => {
      handleResetEvaluation();
    });
  };


  const getEvaluationAverage = (evaluation) => {
    if (!evaluation) return 0;
    let sum = 0;

    sum +=
      evaluation.behaviour + evaluation.teamwork + evaluation.communication;

    return (sum / 3).toFixed(2) || 0;

  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />

      <h1 style={{ marginBottom: '20px', marginTop: '50px' }}>Evaluations</h1>
      <h2 style={{ marginBottom: '20px' }}>Student List</h2>
      <FormControl variant="outlined" onChange={handleSearch}>
        <InputLabel>Search Students</InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Modal open={modal} onClose={handleModalClose}>
        {modalContent ? (
          <Box sx={modalStyle}>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginBottom: '10px' }}
            >
              Student Name: {modalContent.userName}
            </Typography>
            {modalContent?.evaluations !== undefined &&
            modalContent?.evaluations.length !== 0 ? (
              <>
                <Typography component="legend">Behaviour Evaluation</Typography>

                <Rating value={modalContent.evaluations.behaviour} readOnly />
                <Typography component="legend">Teamwork Evaluation</Typography>
                <Rating value={modalContent.evaluations.teamwork} readOnly />

                <Typography component="legend">
                  Communication Evaluation
                </Typography>
                <Rating

                  value={modalContent.evaluations.communication}
                  readOnly
                />
                {modalContent.evaluations?.objection && (
                  <div style={{ marginTop: '10px' }}>
                    Student Objected
                    <Typography>
                      {modalContent.evaluations?.objection}
                    </Typography>
                  </div>
                )}

                <div style={{ marginTop: '20px' }}>
                  <Button
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    onClick={handleDeleteEvaluation}
                  >
                    Delete Evaluation
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Typography component="legend">Behaviour Evaluation</Typography>
                <Rating
                  value={behaviour}
                  onChange={(event, newValue) => {
                    setBehaviour(newValue);
                  }}
                />
                <Typography component="legend">Teamwork Evaluation</Typography>
                <Rating
                  value={teamwork}
                  onChange={(event, newValue) => {
                    setTeamwork(newValue);
                  }}
                />
                <Typography component="legend">
                  Communication Evaluation
                </Typography>
                <Rating
                  value={communication}
                  onChange={(event, newValue) => {
                    setCommunication(newValue);
                  }}
                />
                <div style={{ marginTop: '20px' }}>
                  <Button
                    variant="contained"
                    endIcon={<SaveAsIcon />}
                    disabled={!behaviour || !teamwork || !communication}
                    onClick={handleSubmitEvaluation}
                  >
                    Submit Evaluation
                  </Button>
                </div>
              </>
            )}
          </Box>
        ) : (
          <div>empty</div>
        )}
      </Modal>
      <div className="evaluations" style={{ marginTop: '40px' }}>
        {search && (
          <div>
            {
              students.filter((student) => student.userName.includes(search))
                .length
            }{' '}
            Students with matching name found.
          </div>
        )}

        {students
          .filter((student) => student.userName.includes(search))
          .map((student) => {
            return (
              <div
                className="evaluation"
                key={student._id}
                onClick={() => {
                  handleModalOpen(student);
                }}
              >
                <h3 className="evaluation-name">

                  {`${student?.evaluations?.objection ? '(!)' : ''} ` +
                    `${student.userName} (${
                      (student?.evaluations !== undefined &&
                        student.evaluations.length !== 0 &&
                        getEvaluationAverage(student.evaluations)) ||
                      'not evaluated'
                    }`}

                  )
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Evaluate;
