import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
// pages & components
import Login from './pages/Login'
import Signup from './pages/Signup'
import Student from './pages/Student'
import Teacher from './pages/Teacher'
import Home from './pages/Home'
import Addevent from './pages/Addevent'
import EventsTabOnTeacher from './pages/EventsTabOnTeacher'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="pages">
          <switch>
            <Routes>
            <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup"   // bak bu isim user.js'teki route ismi ile ayni. oraya middleware kurmuştuk zaten.
                element={<Signup />} 
              />
             
              <Route 
                path="/student" 
                element={<Student />} 
              />
              <Route
                path="/teacher" 
                element={<Teacher />} 
              />

              <Route
                path = "/teacher/events"
                element= {<EventsTabOnTeacher />}
              />

              <Route 
                path="/teacher/events/addevent" 
                element={<Addevent />} 
              />



            
            </Routes>
          </switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;