import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import Login from '../components/Login';
import Home from '../components/Home';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);  // Set authentication state to true
  };

  // PrivateRoute to protect the Home page
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        
        <Route 
          path="/home" 
          element={
            
              <Home/>
          
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
