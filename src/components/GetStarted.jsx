import React from 'react';
import { motion } from 'framer-motion';
import HomeImg from '../../public/Home.svg'; // Update the path if necessary
import signUp from '../../public/signup.svg'; // Update the path if necessary
import './GetStarted.css'; // Ensure you import the CSS file

const GetStarted = ({ reverseLayout = false }) => {
  return (
    <div className="get-started">
      <div className="get-started-container">
        {/* Text Section */}
        <div className={`text-section ${reverseLayout ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Get Started?
          </h2>
          <div className="text-content">
            <p className="text-sm md:text-base">
              Download the app now on your smartphone & enjoy a safe
            </p>
            <p className="text-sm md:text-base">
              and pocket-friendly journey with Rydify!
            </p>
          </div>
          <button className="download-button">
            Download App
          </button>
        </div>

        {/* Image Section */}
        <div className={`image-section ${reverseLayout ? 'md:order-1' : 'md:order-2'}`}>
          <div className="image-container">
            <motion.img
              src={HomeImg}
              alt="App Screenshot 1"
              className="image"
              whileHover={{ scale: 1.1 }} // Zoom effect on hover
              transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Smooth transition
            />
            <motion.img
              src={signUp}
              alt="App Screenshot 2"
              className="image"
              whileHover={{ scale: 1.1 }} // Zoom effect on hover
              transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Smooth transition
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
