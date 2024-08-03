// FloatingPhones.jsx
import React from 'react';
import HomeImg from '../assets/Home.svg';
import signUp from '../assets/sign_up.jpg';

const FloatingPhones = () => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-48 md:w-64 bg-white rounded-3xl overflow-hidden shadow-lg mx-auto md:mx-0">
        <img src={HomeImg} alt="App Screenshot 1" className="w-full" />
      </div>
      <div className="w-48 md:w-64 bg-white rounded-3xl overflow-hidden shadow-lg mx-auto md:mx-0 md:mt-8">
        <img src={signUp} alt="App Screenshot 2" className="w-full" />
      </div>
    </div>
  );
};

export default FloatingPhones;