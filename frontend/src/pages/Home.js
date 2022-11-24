import '../index.css';
import React from 'react';
import { useState } from 'react';

import lifting from '../img/lifting.jpg';
import Navbar from '../components/Navbar';
import c1 from '../img/c1.jpg';
import c2 from '../img/c2.jpg';
import c3 from '../img/c3.jpg';
import c4 from '../img/c4.jpg';
/*const response = await fetch('/api/announcement', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password, role })
})
const json = await response.json()*/

const Home = () => {
  const [title, setTitle] = useState('');
  const [stuff, setStuff] = useState('');

  const role = 'Teacher';

  if (role === 'Teacher') {
    return (
      <div className="homePage">
        <Navbar />
        <label>Title</label>
        <input
          type="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>and stuff</label>
        <input
          type="stuff"
          onChange={(e) => setStuff(e.target.value)}
          value={stuff}
        />
      </div>
    );
  }
  return null;
};

export default Home;
