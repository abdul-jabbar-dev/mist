import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';

const CustomHeader = () => {
    return (<Helmet>
        <title>AboutUs</title>
    </Helmet>)
}

const AboutUs = () => {
    return (
        <div>
            <CustomHeader></CustomHeader>
            <Navbar></Navbar>
            <h1>About</h1>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;