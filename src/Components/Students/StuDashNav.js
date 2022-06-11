import React, { useState } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { SiGoogleclassroom } from "@react-icons/all-files/si/SiGoogleclassroom";
import { HiOutlineCurrencyDollar } from "@react-icons/all-files/hi/HiOutlineCurrencyDollar";
import { RiBillLine } from "@react-icons/all-files/ri/RiBillLine";
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { HiOutlineDocumentReport } from "@react-icons/all-files/hi/HiOutlineDocumentReport";
import { MdLiveTv } from "@react-icons/all-files/md/MdLiveTv";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";


const navigationLinks = [
    { menus: 'Student Profile', icon: <CgProfile className="h-5 w-5" />, to: `/studentdash` },
    { menus: 'Attendance Report', icon: <HiOutlineDocumentReport className="h-5 w-5" />, to: 'attendancereport' },
    { menus: 'Invoice', icon: <RiBillLine className="h-5 w-5" />, to: 'invoice' },
    { menus: 'Routine', icon: <SiGoogleclassroom className="h-5 w-5" />, to: 'classrouting' },
    { menus: 'Class shedule', icon: <CgMenuGridO className="h-5 w-5" />, to: 'classshedule' },
    { menus: 'Online Class', icon: <MdLiveTv className="h-5 w-5" />, to: 'onlineclass' },
    { menus: 'Certificates', icon: <FaGraduationCap className="h-5 w-5" />, to: 'certificates' },
    { menus: 'Online Payment', icon: <HiOutlineCurrencyDollar className="h-5 w-5" />, to: 'studenPayment' },
]


const StuDashNav = () => {
    const path = Boolean(useMatch('/studentdash'))
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='md:hidden w-full '>
                {!open ? <GiHamburgerMenu onClick={e => setOpen(true)} className='mx-auto cursor-pointer my-2 text-3xl text-gray-400'></GiHamburgerMenu> : <GrClose onClick={e => setOpen(false)} className='mx-auto cursor-pointer my-2 text-3xl text-gray-400 opacity-40'></GrClose>}
            </div>
            <div className={open ? 'md:block' : 'hidden md:block'}>
                <div className="md:flex flex-col   max-w-64 min-w-42 h-full relative top-0  px-4 py-8  border-r dark:bg-gray-800 dark:border-gray-600">
                    <h2 className="text-3xl  font-semibold  text-gray-800 dark:text-white">Student Room</h2>
                    <div className="flex flex-row  justify-between flex-1 mt-6">
                        <nav className="flex flex-wrap h-max md:block ">
                            {navigationLinks.map((menu, i) =>
                                <NavLink to={menu.to}
                                    key={i}
                                    onClick={e => setOpen(false)}
                                    className={({ isActive }) => 'flex transform sm:w-full w-2/4 rounded-md items-center mt-5 duration-200 px-4 py-2 transition-colors '.concat(path && isActive ? ('text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200') : 'dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:bg-gray-700 text-gray-400 hover:text-gray-200')
                                    }>
                                    {menu.icon}
                                    < span className="mx-4 font-medium" > {menu.menus}</span>
                                </NavLink>)}
                        </nav>
                    </div>
                </div >
            </div>
        </div >
    );
};

export default StuDashNav;