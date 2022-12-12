import React from "react"

import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Navbar from '../components/Navbar'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const {signup, error, isLoading} = useSignup()
  const [assignedemail, setAssignedemail]= useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.warn("all data",email,password,role)
    console.log("in signup: ", assignedemail)
    await signup(email, password, role, assignedemail)
    setEmail("")
    setPassword("")
    setRole("")
  }

  return (
    <div className="signupContainer">
    <Navbar/>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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
      <label>assignedEmail enter none:</label>
      <input 
        type="text" 
        onChange={(e) => setAssignedemail(e.target.value)} 
        value={assignedemail} 
      />
      <p>I am a</p>
      <select 
        onChange={(e)=>setRole(e.target.value)}
        value={role}
        type="role"
        >
        <option>Select</option>
        <option>Student</option>
        <option>Teacher</option>
      </select>
      <br /> <br />
      <button disabled={isLoading} type="submit">Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default Signup