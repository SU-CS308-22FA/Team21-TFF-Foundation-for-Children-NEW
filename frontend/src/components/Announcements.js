import '../pages/Announcements.scss';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import AnnouncementItem from './AnnouncementItem';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import stringSimilarity from 'string-similarity';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();
  const userRole = user && user.role;
  const isPermittedToEdit = userRole === 'Teacher';

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            style={{
              margin: '20px',
              textAlign: 'center',
            }}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {userRole && (
            <FormControl
              style={{
                margin: '20px',
                textAlign: 'center',
                width: '125px',
              }}
            >
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                label="Filter"
                onChange={(e) => setFilter(e.target.value)}
              >
                {userRole === 'Teacher' && (
                  <MenuItem value={'Teacher'}>Teacher</MenuItem>
                )}
                {(userRole === 'Teacher' || userRole === 'Student') && (
                  <MenuItem value={'Student'}>Student</MenuItem>
                )}
                <MenuItem value={'Everyone'}>Public</MenuItem>
                <MenuItem value={''}>Clear</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>
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
          if (
            search &&
            stringSimilarity.compareTwoStrings(
              ann.title.toLowerCase(),
              search.toLowerCase()
            ) < 0.4
          ) {
            return null;
          }
          if (filter && filter !== ann.permitted) return null;
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
