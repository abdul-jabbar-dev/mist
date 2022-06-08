import React from 'react';
import Helmet from 'react-helmet';
import Events from '../Components/Home/Events';
import AdmissionBanner from '../Components/Home/AdmissionBanner';
import Bannar from '../Components/Home/Bannar';
import Slider from '../Components/Home/Slider';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';

const CustomHeader = () => {
    return (<Helmet>
        <title>MIST</title>
    </Helmet>)
}


const Home = () => {
    return (
        <>
            <CustomHeader></CustomHeader>

            <body className="bg-gray-100">
                <Navbar></Navbar>
                <br />
                <AdmissionBanner></AdmissionBanner>
                <Slider></Slider><br /><br />
                <Bannar></Bannar>
                <Events></Events>
            </body>
            <Footer ></Footer>
        </>
    );
};

export default Home;