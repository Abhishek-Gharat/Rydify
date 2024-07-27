import React from 'react';
import HomeImg from '../../public/Home.png';
import signUp from '../../public/signup.png';
import './GetStarted.css'; // Ensure you import the CSS file

const GetStarted = ({ reverseLayout = false }) => {
  return (
    <div className="get-started">
      <div className="get-started-container">
        {/* Text Section */}
        <div className={`text-section ${reverseLayout ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Get Started?
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Download the app now on your smartphone & enjoy a safe and pocket-friendly journey with Rydify!
          </p>
          <button className="px-4 py-2 bg-white text-[#0e3e5c] rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
            Download App
          </button>
        </div>

        {/* Image Section */}
        <div className={`image-section ${reverseLayout ? 'md:order-1' : 'md:order-2'}`}>
          <div className="image-container">
            <img src={HomeImg} alt="App Screenshot 1" className="image" />
            <img src={signUp} alt="App Screenshot 2" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
