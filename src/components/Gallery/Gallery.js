import React from 'react';
import Carousel from '../Carousel/Carousel';
import imagesSlider from '../../assets/data/ImagesSlider'

const Gallery = () => {
    return (
        <section id="section-gallery">
            <Carousel images={imagesSlider}/>
        </section>
    );
};

export default Gallery;