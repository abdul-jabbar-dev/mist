import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate()
    return (

        <div className="bg-gray-100 flex h-screen align-middle items-center justify-center">
            <div>
                <center className="mx-auto ">
                    <div className=" tracking-widest "> 
                        <span className="text-gray-500 text-6xl block"><span>4  0  4</span></span>
                        <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>

                    </div>
                </center>
                <center className="mt-6">
                    <button onClick={e => navigate(-1)} className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </button>
                </center>
            </div>
        </div>

    );
};

export default PageNotFound;