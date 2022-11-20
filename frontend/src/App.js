import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components

import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
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
            </Routes>
          </switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;