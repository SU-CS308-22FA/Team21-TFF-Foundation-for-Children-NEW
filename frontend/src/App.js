import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// pages & components
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddTraining from './pages/AddTraining';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Events from './pages/Events';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import AnnouncementAdd from './pages/AnnouncementAdd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addTraining" element={<AddTraining />} />
            <Route
              path="/signup" // bak bu isim user.js'teki route ismi ile ayni. oraya middleware kurmuştuk zaten.
              element={<Signup />}
            />

            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />

            <Route path="/student/events" element={<Events />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/announcementAdd" element={<AnnouncementAdd />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
