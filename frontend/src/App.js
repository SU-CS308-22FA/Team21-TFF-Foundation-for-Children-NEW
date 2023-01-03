import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// pages & components
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Home from './pages/Home';
import AnnouncementAdd from './pages/AnnouncementAdd';
import AnnouncementPage from './pages/AnnouncementPage';
import Evaluate from './pages/Evaluate';
import Evaluation from './pages/Evaluation';
<<<<<<< Updated upstream
import Login from './pages/Login'
import Signup from './pages/Signup'
import Training from './pages/Training'
import Selection from './pages/Selection'
import Addevent from './pages/Addevent'
import EventsTabOnTeacher from './pages/EventsTabOnTeacher'
import EventsTabOnStudent from './pages/StudentEventsTab'
import ApplyEvent from './pages/applyForEvent'
import UpdateEvent from './pages/Updateevent'
import UpdateTraining from './pages/createTraining'
import ListTrainings from './pages/listTrainings'
import ViewTraining from './pages/viewTraining'
import ListSkills from './pages/listSkills'
import CreateTraining from './pages/createTraining'
import AssignTrainingsToStu from './pages/AssignTraining'
=======
import Login from './pages/Login';
import Signup from './pages/Signup';
import Training from './pages/Training';
import Selection from './pages/Selection';
import Addevent from './pages/Addevent';
import EventsTabOnTeacher from './pages/EventsTabOnTeacher';
import EventsTabOnStudent from './pages/StudentEventsTab';
import ApplyEvent from './pages/applyForEvent';
import UpdateEvent from './pages/Updateevent';
import UpdateTraining from './pages/createTraining';
import ListTrainings from './pages/listTrainings';
import ViewTraining from './pages/viewTraining';
import ListSkills from './pages/listSkills';
import CreateTraining from './pages/createTraining';
import AssignTrainingsToStu from './pages/AssignTraining';
import IssueAdd from './pages/IssueAdd';
import Issues from './pages/Issues';
>>>>>>> Stashed changes
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <switch>
            <Routes>
<<<<<<< Updated upstream
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
=======
              <Route path="/" element={<Home />} />
              <Route path="/selection" element={<Selection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addTraining" element={<Training />} />
              <Route
                path="/signup" // bak bu isim user.js'teki route ismi ile ayni. oraya middleware kurmuştuk zaten.
                element={<Signup />}
              />

              <Route path="/student" element={<Student />} />
              <Route path="/teacher" element={<Teacher />} />

              <Route path="/teacher/events" element={<EventsTabOnTeacher />} />

              <Route path="/teacher/events/addevent" element={<Addevent />} />

              <Route path="/student/events" element={<EventsTabOnStudent />} />

              <Route
                path="/student/events/applyevent"
                element={<ApplyEvent />}
>>>>>>> Stashed changes
              />

              <Route
                path="/teacher/events/updateevent"
                element={<UpdateEvent />}
              />

              <Route path="/teacher/trainings" element={<ListTrainings />} />

              <Route path="/teacher/trainings/:id" element={<ViewTraining />} />

              <Route
                path="/teacher/trainings/:id/update"
                element={<UpdateTraining />}
              />

<<<<<<< Updated upstream
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
                path = "/teacher/events/updateevent"
                element = {<UpdateEvent/>}
              />

              <Route
                path = "/teacher/trainings"
                element = {<ListTrainings/>}
              />

              <Route
                path = "/teacher/trainings/:id"
                element = {<ViewTraining/>}
              />

              <Route
                path = "/teacher/trainings/:id/update"
                element = {<UpdateTraining/>}
              />

              <Route
                path = "/teacher/skills"
                element = {<ListSkills/>}
              />
              <Route
                path = "/teacher/trainings/create"
                element = {<CreateTraining/>}
              />
              <Route
                path = "/teacher/trainings/:id/assign/students"
                element = {<AssignTrainingsToStu/>}
              />



              <Route path="/announcements" element={<AnnouncementPage />} />
              <Route path="/announcementAdd" element={<AnnouncementAdd />} />
              <Route path="/evaluate" element={<Evaluate />} />
              <Route path="/evaluation" element={<Evaluation />} />
            
=======
              <Route path="/teacher/skills" element={<ListSkills />} />
              <Route
                path="/teacher/trainings/create"
                element={<CreateTraining />}
              />
              <Route
                path="/teacher/trainings/:id/assign/students"
                element={<AssignTrainingsToStu />}
              />

              <Route path="/announcements" element={<AnnouncementPage />} />
              <Route path="/announcementAdd" element={<AnnouncementAdd />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/reportIssue" element={<IssueAdd />} />
              <Route path="/evaluate" element={<Evaluate />} />
              <Route path="/evaluation" element={<Evaluation />} />
>>>>>>> Stashed changes
            </Routes>
          </switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
