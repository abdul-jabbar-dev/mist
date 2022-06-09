import React from 'react';
import { Outlet } from 'react-router-dom';
import StuDashNav from '../../Components/Students/StuDashNav';
import Footer from '../../globalComponents/Footer';
import Navbar from '../../globalComponents/Navbar';

const StudentsDashboard = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="flex bg-gray-100  ">

                <div className="flex-none">
                    <StuDashNav></StuDashNav>
                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default StudentsDashboard;