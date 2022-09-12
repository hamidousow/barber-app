import React from 'react';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Service from '../components/NosServices/Service';
// import { useParams } from 'react-router-dom';

const Home = () => {
    // const params = useParams()
    return (
        <>
            <Hero/>
            <About/>
            <Service/>
        </>
    );
};

export default Home;