import '../index.scss';
import React from 'react';
import lifting from '../img/lifting.jpg';
import Navbar from '../components/Navbar';
import c1 from '../img/c1.jpg';
import c2 from '../img/c2.jpg';
import c3 from '../img/c3.jpg';
import c4 from '../img/c4.jpg';

import { useAuthContext } from '../hooks/useAuthContext';
import Announcements from './Announcements';
import Evaluation from './Evaluation';

const Home = () => {
  const { user } = useAuthContext();
<<<<<<< Updated upstream
  
=======
  console.log(user);
>>>>>>> Stashed changes
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
        <div style={{ textAlign: 'center' }}>
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
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
      </div>
      <div className="purposeDescription">
        <img src={lifting} alt="" />
        <div className="description">
          <h1> WHY US? </h1>
          <p> Please keep reading for details. To be updated... </p>
        </div>
      </div>
      <div className="teacherContainer">
<<<<<<< Updated upstream
        {user?.role === 'Student'&& (
          <Evaluation/>
          )
      
        };
        
=======
        {user?.role === 'Student' && <Evaluation />};
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
export default Home;
