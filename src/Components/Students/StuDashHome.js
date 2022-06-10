import React from 'react';
import { RiCurrencyLine } from "@react-icons/all-files/ri/RiCurrencyLine";
import { RiBillLine } from "@react-icons/all-files/ri/RiBillLine";
import { SiMicrosoftonenote } from "@react-icons/all-files/si/SiMicrosoftonenote";
import { SiGoogleclassroom } from "@react-icons/all-files/si/SiGoogleclassroom";


const StuDashHome = () => {
    return (
        <div>
            <div className="bg-slate-700 w-full py-10 px-10">
                <div>
                    <div className="sm:flex space-x-7 md:items-start items-center">
                        <div className="mb-4">
                            <img className="rounded-md md:w-80" src="https://abduljabbar15.web.app/static/media/Avatar.f8b861d9.png" alt="brad" />
                        </div>
                        <div>
                            <h1 className="text-slate-100 text-4xl font-bold my-2">Abdul Jabbar</h1>
                            <p className="text-slate-100 text-lg tracking-wide mb-6 md:max-w-lg">Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.</p>
                            <button onClick={e => window.location.href = 'https://www.facebook.com/abduljabbar3200/'} className="border-2 px-6 py-4 rounded-md border-indigo-600 text-slate-100 hover:bg-indigo-600 hover:text-indigo-100 transition duration-75">VISIT FACEBOOK PROFILE</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
                    <div className="bg-slate-600 p-6 rounded-md mb-4">
                        <span className="text-slate-400 text-md">Location</span>
                        <h2 className="text-slate-100 text-2xl font-semibold">Hossain Market Tongi Gazipur </h2>
                    </div>
                    <div className="bg-slate-600 p-6 rounded-md mb-4 flex  space-x-2">
                        <div className="border-r-2 w-3/6">
                            <span className="text-slate-400 text-md">Student Number</span>
                            <h2 className="text-slate-100 text-xl font-semibold">(+88)01733941913</h2>
                        </div>

                        <div className=" w-3/6">
                            <span className="text-slate-400 text-md">Parent Number</span>
                            <h2 className="text-slate-100 text-xl font-semibold">(+88)01755569874</h2>
                        </div>
                    </div>
                    <div className="bg-slate-600 p-6 rounded-md mb-4">
                        <span className="text-slate-400 text-md">Registration number</span>
                        <h2 className="text-slate-100 text-2xl font-semibold">154448965254</h2>
                    </div>
                </div>
                <div className="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
                    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                        <div>
                            <span className="text-md text-slate-400">Total Class</span>
                            <h1 className="text-3xl font-bold text-slate-100">47</h1>
                        </div>
                        <div>
                            <SiGoogleclassroom className="h-12 w-12 text-cyan-500" />
                        </div>
                    </div>
                    <div className="flex  bg-slate-600 p-6 rounded-md mb-4  space-x-3">
                        <div className='flex justify-between flex-1 items-center space-x-2'>
                            <div className='w-1/2 border-r-2'>
                                <span className="text-md text-slate-400">Unpaid Bill</span>
                                <h1 className="text-3xl font-bold text-slate-100">0</h1>
                            </div>
                            <div className='w-1/2'>
                                <span className="text-md text-slate-400">Unpaid Amount</span>
                                <h1 className="text-3xl font-bold text-slate-100">500</h1>
                            </div>
                        </div>
                        <div className='  flex justify-center items-center'>
                            <div>

                                <RiCurrencyLine className="h-12 w-12 text-green-500" />
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                        <div>
                            <span className="text-md text-slate-400">Total Paid Bill</span>
                            <h1 className="text-3xl font-bold text-slate-100">0</h1>
                        </div>
                        <div>
                            <RiBillLine className="h-12 w-12 text-yellow-500" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
                        <div>
                            <span className="text-md text-slate-400">Missed Class test</span>
                            <h1 className="text-3xl font-bold text-slate-100">1</h1>
                        </div>
                        <div>
                            <SiMicrosoftonenote className="h-12 w-12 text-red-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StuDashHome;