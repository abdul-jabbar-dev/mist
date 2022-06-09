import React from 'react';
import Helmet from 'react-helmet';
import Events from '../Components/Home/Events';
import ShortBanner from '../Components/Home/ShortBanner';
import Bannar from '../Components/Home/Bannar';
import Slider from '../Components/Home/Slider';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import WelcomeBanner from '../Components/Home/WelcomeBanner';

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

                <WelcomeBanner></WelcomeBanner>
                <ShortBanner></ShortBanner>
                <Slider></Slider><br /><br />
                <Bannar></Bannar>
                <Events></Events>
            </body>
            <Footer ></Footer>
        </>
    );
};

export default Home;