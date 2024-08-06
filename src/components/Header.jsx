import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Remove Variants import
import Top from '../../public/top.svg'; // Adjust path as needed
import Logo from '../../public/logo.svg'; // Adjust path as needed
import Phoneanimation from '../components/PhoneAnimetion/Phoneani'
import '../App.css'
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } } // Stagger animation
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};
const Header = () => {
  return (
    <header className="bg-white py-9 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <img src={Logo} alt="Rydify Logo" className="h-15" />
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <motion.div
            className="max-w-lg text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants} // Apply container variants here
          >
           <motion.h1
              className="linear__text__gradient text-5xl font-extrabold leading-10 tracking-tight  sm:text-4xl sm:leading-none md:text-4xl"
              style={{ fontFamily: 'Merriweather, serif' }} // Apply the Merriweather font here
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Revolutionizing Ride Sharing in United States
            </motion.h1>
            <motion.p
              className="text-gray-600 mb-6 mt-2"
              variants={textVariants}
            >
              Affordable, Sustainable and Community-Driven travel
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start items-center text-[#0e7490]"
              variants={textVariants}
            >
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-semibold">One Stop Ride Solution</span>
            </motion.div>
          </motion.div>
          
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg p-4">
              {/* <img 
                src={Top} 
                alt="Ride-sharing illustration" 
                className="w-full h-auto"
              /> */}
              <Phoneanimation/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
