import '../index.scss';
import React from 'react';
import Navbar from '../components/Navbar';
import { useAuthContext } from '../hooks/useAuthContext';
import Announcements from '../components/Announcements';
import Evaluation from '../components/Evaluation';

const Home = () => {
  const { user } = useAuthContext();
  const userName = user?.userName?.toString() || '';
  fetch()
    .then((res) => {
      if (res.ok) {
        console.log('SUCCESS');
      } else {
        console.log('Not Successful');
      }
    })

    .then((data) => console.log(data))
    .catch((error) => console.log('ERROR'));

  return (
    <div className="homePage">
      <Navbar />
      <div className="aboutDescription">
        
        <div style={{ textAlign: 'center', margin:"auto" }}>
          <h1>
            {userName
              ? `Welcome, ${userName}`
              : 'Welcome, would you like to signup?'}
          </h1>
          <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
            ANNOUNCEMENTS
          </h2>
          <div
            style={{
              height: '50vh',

              overflow: 'auto',
              width: '600px',
              margin: 'auto',
              minHeight: '200px',
              maxHeight: '500px',
            }}
            className="announcement-wrapper"
          >
            <Announcements />
          </div>
        </div>
        <div
 
       className="SecondContent">
        {user?.role === 'Student' && <Evaluation />}
      </div>
      </div>
    </div>
  );
};
export default Home;
