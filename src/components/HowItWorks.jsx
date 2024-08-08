import React from 'react';
import { FaSearch, FaUserCheck, FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Main from '../../public/main.svg';
import CarSvg from '../../public/Car.svg'; // Adjust path as needed
import DriverSvg from '../../public/driver.svg'
const HowItWorks = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="pt-20 pb-32 px-4 mx-auto max-w-[1300px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-left"
          >
            Wondering How Rydify Works?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 mb-8 text-left"
          >
            Let us walk you through that!
          </motion.p>

          <div className="space-y-10 text-left">
            <Step 
              icon={<FaSearch className="text-[#0e7490]" />}
              title="Search for Ride"
              description="Enter your travel details and find available rides"
            />
            <Step 
              icon={<FaUserCheck className="text-[#0e7490]" />}
              title="Choose a Driver"
              description="Select from various drivers that fit your schedule"
            />
            <Step 
              icon={<FaCar className="text-[#0e7490]" />}
              title="Book & Travel"
              description="Confirm your booking and enjoy a smooth journey"
            />
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-end">
          <motion.img
            src={Main} 
            alt="Rydify illustration" 
            className="w-full max-w-[500px] h-auto" 
            initial={{ opacity: 0 }}
            animate={{ opacity: sectionInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

const Step = ({ icon, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      className="flex items-start"
    >
      <div className="mr-4 mt-1">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
