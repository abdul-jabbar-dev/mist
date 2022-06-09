import React from 'react';
import { FaChalkboardTeacher } from "@react-icons/all-files/fa/FaChalkboardTeacher";
import { BsChat } from "@react-icons/all-files/bs/BsChat";
import { FaUserGraduate } from "@react-icons/all-files/fa/FaUserGraduate";
import mist from '../../resource/supports/mist.png'
import duet from '../../resource/supports/DUET_Logo.png'
import a2 from '../../resource/supports/a2.png'
import dg from '../../resource/supports/dg.png'
import gov from '../../resource/supports/gov.png'
import headerImage from '../../resource/exam.jpg'

const Bannar = () => {
    return (
        <div>

            <section  className="bg-white dark:bg-gray-900 z-20">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> Collage</h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <FaChalkboardTeacher className="w-6 h-6" />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Lorem ipsum dolor sit.</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <BsChat className="w-6 h-6" />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Lorem, ipsum dolor.</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <FaUserGraduate className="w-6 h-6" />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Lorem, ipsum dolor.</h1>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={headerImage} alt="" />
                        </div>
                    </div>

                    <hr className="border-gray-200 my-12 dark:border-gray-700" />

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            <img src={mist} className="w-20 grayscale  mt-1 text-gray-500 fill-current dark:text-gray-300" alt="" />
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            <img src={duet} className="w-20 grayscale  mt-1 text-gray-500 fill-current dark:text-gray-300" alt="" />
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            <img src={a2} className="w-20 grayscale  mt-1 text-gray-500 fill-current dark:text-gray-300" alt="" />
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                            <img src={dg} className="w-20 grayscale  mt-1 text-gray-500 fill-current dark:text-gray-300" alt="" />
                        </div>

                        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                            <img src={gov} className="w-20 grayscale  mt-1 text-gray-500 fill-current dark:text-gray-300" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bannar;