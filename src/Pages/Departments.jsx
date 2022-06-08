import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import DepartmentItems from '../Components/Departments/DepartmentItems';
import Navbar from '../globalComponents/Navbar';
import ArchitectureEngineering from '../resource/Departments/image/ArchitectureEngineering.jpg'
import automobileEngineer from '../resource/Departments/image/automobileEngineer.jpg'
import CivilEngineering from '../resource/Departments/image/CivilEngineering.jpg'
import ComputerEngineering from '../resource/Departments/image/ComputerEngineering.jpg'
import DataTelecommunicationEngineering from '../resource/Departments/image/Data-TelecommunicationEngineering.jpg'
import ElectricalEngineering from '../resource/Departments/image/ElectricalEngineering.jpg'
import ElectronicsEngineering from '../resource/Departments/image/ElectronicsEngineering.jpg'
import TextileEngineering from '../resource/Departments/image/TextileEngineering.jpg'
import telecommunicationEngineering from '../resource/Departments/image/telecommunicationEngineering.jpg'
import MechanicalEngineering from '../resource/Departments/image/MechanicalEngineering.jpg'
import FoodTechnology from '../resource/Departments/image/FoodTechnology.jpg'
import Footer from '../globalComponents/Footer';

const departments = [
    { name: 'Architecture Engineering', image: ArchitectureEngineering },
    { name: 'Automobile Engineer', image: automobileEngineer },
    { name: 'Civil Engineering', image: CivilEngineering },
    { name: 'Computer Engineering', image: ComputerEngineering },
    { name: 'Data-Telecommunication Engineering', image: DataTelecommunicationEngineering },
    { name: 'Electrical Engineering', image: ElectricalEngineering },
    { name: 'Electronics Engineering', image: ElectronicsEngineering },
    { name: 'Telecommunication Engineering', image: telecommunicationEngineering },
    { name: 'Textile Engineering', image: TextileEngineering },
    { name: 'Mechanical Engineering', image: MechanicalEngineering },
    { name: 'Food Technology', image: FoodTechnology },

]

const Departments = () => {
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
<br />
            <div className="container  itemContaier mx-auto justify-items-center lg:px-12 grid 2xl:grid-cols-4 grid-cols-3 gap-y-4">
                {
                    departments.map((item,i)=> <SwiperSlide key={i} className='SwiperSlide'><DepartmentItems name={item.name} img={item.image}> </DepartmentItems></SwiperSlide>)
                }
            </div>
            <Swiper watchSlidesProgress={true} breakpoints={{
                100: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                }, 640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}

                className="mySwiper hidden">

                {
                    departments.map((item,i)=> <SwiperSlide className='SwiperSlide'key={i}><DepartmentItems name={item.name} img={item.image}> </DepartmentItems></SwiperSlide>)
                }

            </Swiper>
            <Footer></Footer>
        </div>
    );
};

export default Departments;