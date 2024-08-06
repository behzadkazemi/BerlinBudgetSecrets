import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-night-black text-white flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-8">
        <a href="#" className="box">University</a>
        <a href="#" className="box">Sightseeing</a>
        <a href="#" className="box">Entertainment</a>
        <a href="#" className="box">Accommodation</a>
      </div>
    </div>
  );
}

export default App;
