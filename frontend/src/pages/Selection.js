import { useAuthContext } from '../hooks/useAuthContext'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
console.log("selection page is called!")


const Selection=  () => {
    const { user } = useAuthContext()
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchUsers= async () =>{
           
          const response= await fetch('/api/user/getstudents')
          const json= await response.json()
          if(response.ok){
            setUsers(json)
            
          }
    }
  
        fetchUsers()
      }, [])

    
    const assignStudent= async (studentEmail) => { 
        console.log("assignStudent called")
        const teacherEmail= user.email
        const data= {studentEmail, teacherEmail}
        console.log("data: ", data)
        try {
          const response = await fetch('/api/user/update', {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          });
          if (!response.ok) {
            const json = await response.json();
            setError(json.error);
            return;
          }
          const json = await response.json();
          console.log("response is ok. json is, ", json);
          setError('');
          const { message } = json;
          alert(message);
        } catch (error) {
          setError('An error occurred while adding the student to your students list');
        }

    }

    return (
        <div className="Selection">
            <Navbar/>
            <div id="selectionHeader1Container">
              <h1 id="selectionHeader1"> STUDENT ACCOUNT DATABASE </h1>
            </div>
            {users && users.map((user2) =>(
                <div className="userContainer">
                    <h3> Student Information </h3>
                    <p key= {user2._id}><strong> Email: </strong> <span id="infoText"> {user2.email} </span> </p>
                    
                    <button id="selectButton" name="email" onClick={() => assignStudent(user2.email)}> Choose </button>
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