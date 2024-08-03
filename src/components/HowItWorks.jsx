import React from 'react';
import { FaSearch, FaUserCheck, FaCar } from 'react-icons/fa';
import Main from '../../public/main.svg';

const HowItWorks = () => {
  return (
    <section className="pt-10 pb-32 max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Wondering How Rydify Works?</h2>
          <p className="text-gray-600 mb-8 text-left">Let us walk you through that!</p>
          
          <div className="space-y-6 text-left">
            <Step 
              icon={<FaSearch className="text-[#0e7490]" />}
              title="Search for Ride"
              description="Enter your travel details and find available rides"
            />
            <Step 
              icon={<FaUserCheck className="text-[#0e7490]" />}
              title="Choose a Driver"
              description="Select from various drivers that fits your schedule"
            />
            <Step 
              icon={<FaCar className="text-[#0e7490]" />}
              title="Book & Travel"
              description="Confirm your booking and enjoy a smooth journey"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src={Main} 
            alt="Rydify illustration" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

const Step = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

export default HowItWorks;
