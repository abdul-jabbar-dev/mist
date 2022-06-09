import React from 'react';
import welcomeImage from '../../resource/welcome.png';
const WelcomeBanner = () => {
    return (
        <div className='flex flex-col relative z-20 items-center justify-center text-white '>
            <div className="container mx-auto absolute z-30">
                <h2 className='  md:text-5xl text-2xl  font-semibold md:text-left text-center'>Best Polytechnic Institute In Gazipur</h2>
                <p className='md:text-2xl text-md md:mb-4'>At MIST, you'll explore new ideas while learning more about yourself. </p>
                
                <button className='bg-red-500 hover:bg-red-600 md:inline  block mx-auto md:ml-0 px-3 py-2 rounded-2xl'>Find your department</button>
            </div>
            <img src={welcomeImage } className="w-full opacity-80" alt="" />
        </div>
    );
};

export default WelcomeBanner;