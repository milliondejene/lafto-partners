// components/Preloader.js
import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../public/js/Loader.json'; // Ensure you have a Lottie animation JSON file

const Preloader = () => {
  return (
    <div className='preloader'>
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Preloader;
