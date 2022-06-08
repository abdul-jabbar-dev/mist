import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminList from '../Components/News/AdminList';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';





const FocalPointUnit = () => {
    return (
        <>
            <NavLink to={'/'}><h5 className='text-slate-700 hover:text-sky-600 font-bold mt-6 text-lg '>Administrators</h5></NavLink>
            <NavLink to={'/'}><h5 className='text-slate-700 hover:text-sky-600 font-bold mt-6 text-lg'>Office Section</h5></NavLink>
            <NavLink to={'/'}><h5 className='text-slate-700 hover:text-sky-600 font-bold mt-6 text-lg'>Registrar Section</h5></NavLink>
            <NavLink to={'/'}><h5 className='text-slate-700 hover:text-sky-600 font-bold mt-6 text-lg'>Library Section</h5></NavLink>
            <NavLink to={'/'}><h5 className='text-slate-700 hover:text-sky-600 font-bold mt-6 text-lg'>Account Section</h5></NavLink>
            <NavLink to={'/'}><h5 className='text-slate-700 hover:text-sky-600 font-bold mt-6 text-lg'>Teachers Section</h5></NavLink>
        </>
    )
}



const AdminInfo = () => {
    return (
        <>
            <Navbar></Navbar>
            <br />
            <div className='container mx-auto'>
                <div className="grid grid-cols-6 ">
                    <div className="lg:col-span-1 col-span-6 ">
                        <FocalPointUnit ></FocalPointUnit>
                    </div>
                    <div className="lg:col-span-5  col-span-6">
                        <AdminList></AdminList>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AdminInfo;