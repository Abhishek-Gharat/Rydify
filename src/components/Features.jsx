import React from 'react';
import { FaCar, FaUserShield, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  return (
<section className="bg-gradient-to-r from-[#e0f0ff] via-[#f0f8ff] to-[#e0f0ff] p-8 md:p-20 rounded-lg text-center mx-4 md:mx-16">
<motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-4 text-[#333]"
      >
        What Makes Us the Perfect Choice For You
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 mb-8 md:mb-10"
      >
        We heard what you need & we are here to serve you!
      </motion.p>
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <FeatureItem 
          icon={<FaCar />}
          title="Easy Booking"
          description="Book your ride with a few clicks only"
        />
        <FeatureItem 
          icon={<FaUserShield />}
          title="Verified Drivers"
          description="All drivers and cars are verified from our site"
        />
        <FeatureItem 
          icon={<FaBolt />}
          title="Flexible Options"
          description="Choose from a range of options that fits your need"
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 md:mb-0"
  >
    <div className="bg-[#0e7490] text-white p-4 md:p-6 rounded-full mb-4">
      {React.cloneElement(icon, { className: "text-3xl md:text-4xl" })}
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#333]">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
  </motion.div>
);

export default Features;
