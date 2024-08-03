import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Top from '../../public/top.svg';
import Logo from '../../public/logo.svg';

const Header = () => {
  return (
    <header className="bg-white py-9 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          {/* Centered Rydify logo and name */}
          <div className="flex items-center">
            {/* <div className="w-8 h-8 bg-[#0e7490] rounded-full flex items-center justify-center mr-2">
              <FaMapMarkerAlt className="text-white" />
            </div> */}
            <img src={Logo} alt="Rydify Logo" className="h-15" />
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Revolutionizing Ride-Sharing in United States
            </h1>
            <p className="text-gray-600 mb-6">
              Affordable, Sustainable and Community-Driven travel
            </p>
            <div className="flex justify-center md:justify-start items-center text-[#0e7490]">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-semibold">One Stop Ride Solution</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* Replace with your actual hero image */}
            <div className="  rounded-lg p-4">
              <img 
                src={Top} 
                alt="Ride-sharing illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
