import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiGoogleclassroom } from "@react-icons/all-files/si/SiGoogleclassroom";
import { HiOutlineCurrencyDollar } from "@react-icons/all-files/hi/HiOutlineCurrencyDollar";
import { RiBillLine } from "@react-icons/all-files/ri/RiBillLine";
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { HiOutlineDocumentReport } from "@react-icons/all-files/hi/HiOutlineDocumentReport";
import { MdLiveTv } from "@react-icons/all-files/md/MdLiveTv";


const navigationLinks = [
    { menus: 'Routine', icon: <SiGoogleclassroom className="h-5 w-5" />, to: 'classrouting' },
    { menus: 'Class shedule', icon: <CgMenuGridO className="h-5 w-5" />, to: 'classshedule' },
    { menus: 'Attendance Report', icon: <HiOutlineDocumentReport className="h-5 w-5" />, to: 'attendancereport' },
    { menus: 'Online Class', icon: <MdLiveTv className="h-5 w-5" />, to: 'onlineclass' },
    { menus: 'Certificates', icon: <FaGraduationCap className="h-5 w-5" />, to: 'certificates' },
    { menus: 'Online Payment', icon: <HiOutlineCurrencyDollar className="h-5 w-5" />, to: 'studenPayment' },
    { menus: 'Invoice', icon: <RiBillLine className="h-5 w-5" />, to: 'invoice' },
]


const StuDashNav = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div className="flex flex-col max-w-64 min-w-42 h-full relative top-0  px-4 py-8  border-r dark:bg-gray-800 dark:border-gray-600">
                <h2 className="text-3xl font-semibold  text-gray-800 dark:text-white">Student Room</h2>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        {navigationLinks.map((menu, i) =>
                            <NavLink to={menu.to}
                                className={({ isActive }) => 'flex transform rounded-md items-center mt-5 duration-200 px-4 py-2 transition-colors w-full'.concat(isActive ? ('text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200') : 'dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:bg-gray-700 text-gray-400 hover:text-gray-200')
                                }>
                                {menu.icon}
                                < span className="mx-4 font-medium" > {menu.menus}</span>
                            </NavLink>)}

                        <hr className="my-6 border-gray-200 dark:border-gray-600" />
                    </nav>

                    <div className="flex items-center px-4 -mx-2">
                        <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                        <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">Abdul Jabbar</h4>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default StuDashNav;