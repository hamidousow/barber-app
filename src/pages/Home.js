import React from 'react';
import About from '../components/About/About';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Hero/Hero';
import Service from '../components/NosServices/Service';
import Tarifs from '../components/Tarifs/Tarifs';
// import { useParams } from 'react-router-dom';

const Home = () => {
    // const params = useParams()
    return (
        <>
            <Hero/>
            <About/>
            <Service/>
            <Tarifs/>
            <Carousel/>
        </>
    );
};

export default Home;