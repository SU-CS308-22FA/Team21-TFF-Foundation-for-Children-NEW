import { useState, useEffect } from "react";

import Navbar from '../components/Navbar'
import { useAuthContext } from '../hooks/useAuthContext'
console.log("selection page is called!")


const Selection= () => {
    const { user } = useAuthContext()
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchUsers= async () =>{
           
          const response= await fetch('/api/user/getusers')
          const json= await response.json()
          if(response.ok){
            setUsers(json)
            
          }
    }
  
        fetchUsers()
      }, [])


    const assignStudent= (studentEmail) => {
        user.assignedEmail=studentEmail
        
        console.log(user.assignedEmail)
        
    }

    return (
        <div className="Selection">
            <Navbar/>
            <div id="selectionHeader1Container">
              <h1 id="selectionHeader1"> STUDENT ACCOUNT DATABASE </h1>
            </div>
            {users && users.map((user) =>(
                <div className="userContainer">
                    <h3> Student Information </h3>
                    <p key= {user._id}><strong> Email: </strong> <span id="infoText"> {user.email} </span> </p>
                    <button id="selectButton" name="email" onClick={() => assignStudent(user.email)}> Choose </button>
                </div>
            ))}
              
            </div>
            
      
    )
}

export default Selection

/*
const [email, setEmail] = useState(null);
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchUsers= async () =>{
            userModel.find()
          const response= await fetch('/tests/users')
          const json= await response.json()
          if(response.ok){
            setUsers(json)
            

          }
    }
  
        fetchUsers()
      }, [])


<form className="login" onSubmit={assignStudent}>

                <h3>Select a Student</h3>
                
                <label>Choose Student:</label>
                <input 
                type="text" 
                name="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                />
                <button >Choose</button>
            </form>

*/