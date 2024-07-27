import React from 'react';
import HomeImg from '../../public/Home.png';
import signUp from '../../public/sign_up.jpg';

const GetStarted = () => {
  return (
    <section className="pt-52 pb-16 px-8 flex items-center justify-between relative overflow-visible" 
             style={{ background: 'linear-gradient(125deg, #01222C 30%, #2296B8 100%)' }}>
      <div className="max-w-md text-white">
        <h2 className="text-5xl font-bold mb-5">Ready to Get Started?</h2>
        <p className="mb-10 text-lg">
          Download the app now on your smart phone & enjoy a safe
          and pocket friendly journey with Rydify!
        </p>
        <button className="px-8 py-3 bg-white text-[#0e3e5c] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
          Download App
        </button>
      </div>
      <div className="absolute right-8 -top-20 flex space-x-4">
        <div className="w-64 rounded-3xl overflow-hidden shadow-lg">
          <img src={HomeImg} alt="App Screenshot 1" className="w-full" />
        </div>
        <div className="w-64 rounded-3xl overflow-hidden shadow-lg mt-16">
          <img src={signUp} alt="App Screenshot 2" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
