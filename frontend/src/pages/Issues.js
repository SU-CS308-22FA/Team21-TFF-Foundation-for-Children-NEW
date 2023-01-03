import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuthContext } from '../hooks/useAuthContext';
import Paper from '@mui/material/Paper';

const Issues = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [issues, setIssues] = useState(null);

  const getIssues = () => {
    fetch('/api/issue')
      .then((response) => response.json())
      .then((data) => {
        setIssues(data);
        setIsLoading(false);
        console.log(data);
      });
  };

  useEffect(() => {
    if (user && user.role === 'Admin') {
      getIssues();
    } else {
      setIsLoading(false);
    }
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

  if (user && user.role === 'Admin') {
    return (
      <div>
        <Navbar />
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            marginTop: '50px',
          }}
        >
          Issues
        </h1>

        <TableContainer
          component={Paper}
          style={{ width: '80%', margin: 'auto' }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">No</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Issue Type</TableCell>
                <TableCell align="left">Topic</TableCell>
                <TableCell align="left">Explanation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {issues.map((row, key) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{key + 1}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.issueType}</TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  return <div>You don't have permission to view this page.</div>;
};

export default Issues;
