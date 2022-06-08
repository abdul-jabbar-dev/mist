import React from 'react';
import Stu_Dash_Nav from '../../Components/Students/Stu_Dash_Nav';
import Navbar from '../../globalComponents/Navbar';

const StudentsDashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex bg-gray-100">
                <Stu_Dash_Nav></Stu_Dash_Nav>
                Under cons
            </div>
        </div>
    );
};

export default StudentsDashboard;