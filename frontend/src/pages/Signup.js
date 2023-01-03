<<<<<<< Updated upstream
import React from "react";

import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import Navbar from "../components/Navbar";
const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [assignedemail, setAssignedemail]= useState('')
=======
import React from 'react';

import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import Navbar from '../components/Navbar';
const Signup = () => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [assignedemail, setAssignedemail] = useState('');
>>>>>>> Stashed changes
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< Updated upstream
    console.warn("all data", userName, email, password, role);
    await signup(email, userName, password, role, assignedemail)
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("");


=======
    console.warn('all data', userName, email, password, role);
    await signup(email, userName, password, role, assignedemail);
    setUsername('');
    setEmail('');
    setPassword('');
    setRole('');
>>>>>>> Stashed changes
  };

  return (
    <div className="signupContainer">
      <Navbar />
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>User name:</label>
        <input
          type="userName"
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
        />
        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label>assignedEmail (Don't touch this part please):</label>
<<<<<<< Updated upstream
        <input 
          
          type="text" 
          onChange={(e) => setAssignedemail(e.target.value)} 
          value={"none"} 
=======
        <input
          type="text"
          onChange={(e) => setAssignedemail(e.target.value)}
          value={'none'}
>>>>>>> Stashed changes
        />
        <p>I am a</p>
        <select
          onChange={(e) => setRole(e.target.value)}
          value={role}
          type="role"
        >
          <option>Select</option>
          <option>Student</option>
          <option>Teacher</option>
        </select>
        <br /> <br />
        <button disabled={isLoading} type="submit">
          Sign up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
<<<<<<< Updated upstream
  )
}
=======
  );
};
>>>>>>> Stashed changes

export default Signup;
