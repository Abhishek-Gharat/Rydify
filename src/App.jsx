import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
// import FloatingPhones from './components/FloatingPhones';
import GetStarted from './components/GetStarted';
import Scrolling from './components/ReactMarkque/Scrolling'
import Loader from './components/Loader/Loader';
import Paralax from './components/paralax/TextParallaxContentExample'
const App = () => {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      finishLoading();
    }, 3000);
  }, []);

  return (
    <>
      {loading && <Loader finishLoading={finishLoading} />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in' }}>
        <Header />
        <Features />
        {/* <Paralax/> */}
        <HowItWorks />
        {/* <Scrolling /> */}
        <GetStarted />
      </div>
    </>
  );
};

export default App;