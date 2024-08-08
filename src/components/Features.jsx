import React from 'react';
import { FaUserShield, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CarSvg from '../../public/Car.svg'; // Adjust path as needed
import DriverSvg from '../../public/driver.svg'
import ThunderSvg from '../../public/Thunder.svg'
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
          icon={<img src={CarSvg} alt="Car" className="w-10 h-10 md:w-12 md:h-12" />} // Use SVG here}
          title="Easy Booking"
          description="Book your ride with a few clicks only"
        />
        <FeatureItem 
          icon={<img src={DriverSvg} alt="DriverSvg" className="w-10 h-10 md:w-12 md:h-12" />} // Use SVG here}
          title="Verified Drivers"
          description="All drivers and cars are verified from our site"
        />
        <FeatureItem 
          icon={<img src={ThunderSvg} alt="ThunderSvg" className="w-10 h-10 md:w-12 md:h-12" />} // Use SVG here}
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
    <div className="bg-[#0e7490] text-white p-4 md:p-6 rounded-full mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#333]">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
  </motion.div>
);

export default Features;
