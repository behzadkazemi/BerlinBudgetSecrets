import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-8">
        <Link to="/university" className="box">University</Link>
        <Link to="/sightseeing" className="box">Sightseeing</Link>
        <Link to="/entertainment" className="box">Entertainment</Link>
        <Link to="/accommodation" className="box">Accommodation</Link>
      </div>
    </div>
  );
};

export default Home;
