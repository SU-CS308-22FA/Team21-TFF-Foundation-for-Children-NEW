import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
// pages & components
import Login from './pages/Login'
import Signup from './pages/Signup'
import Training from './pages/Training'
import Student from './pages/Student'
import Teacher from './pages/Teacher'
import Home from './pages/Home'
import Selection from './pages/Selection'
import Addevent from './pages/Addevent'
import EventsTabOnTeacher from './pages/EventsTabOnTeacher'
import EventsTabOnStudent from './pages/StudentEventsTab'
import ApplyEvent from './pages/applyForEvent'
import MyEvents from './pages/myEventsTab'
import UpdateEvent from './pages/Updateevent'
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
                path="/selection" 
                element={<Selection />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
               <Route 
                path="/addTraining" 
                element={<Training />} 
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

              <Route
                path = "/student/events"
                element= {<EventsTabOnStudent />}
              />

              <Route
                path = "/student/events/applyevent"
                element = {<ApplyEvent/>}
              />

              <Route
                path = "/student/events/myevents"
                element = {<MyEvents/>}
              />

              <Route
                path = "/teacher/events/updateevent"
                element = {<UpdateEvent/>}
              />
            
            </Routes>
          </switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;