import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
// pages & components
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Student from './pages/Student'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <switch>
            <Routes>

              <Route 
                path="/login" 
                element={<Login />} 
              />

              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/student" 
                element={<Student />} 
              />



            </Routes>
          </switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;