import React from 'react';
import './index.css';
import University from './components/University';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-night-black text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<University />} />
        
      </Routes>
    </div>

    
  );
}

export default App;
