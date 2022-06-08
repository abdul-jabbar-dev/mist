/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

const AdmissionBanner = () => {
    return (
        <div className='svg-container '>
            <div className="flex  h-full">
                <marquee className="container h-16 top-44 absolute right-0 left-0 mx-auto  text-3xl text-gray-50">Admission going on 2022</marquee>
                <h1 className='m-0 p-0 absolute top-24 text-4xl font-bold uppercase text-center right-0 left-0 text-gray-50'>model institute of science and technology(MIST)</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height={'500px'} className='topBannerClip' viewBox="0 0 1440 320" ><path fill="#f3f4f6" fill-opacity="1" d="M0,256L40,234.7C80,213,160,171,240,165.3C320,160,400,192,480,202.7C560,213,640,203,720,197.3C800,192,880,192,960,192C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    );
};

export default AdmissionBanner;