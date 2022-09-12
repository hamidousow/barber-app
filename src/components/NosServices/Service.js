import React from 'react';
import Card from '../Card/Card';
import haircut from '../../assets/haircut.jpg'
// import haircut from '../../assets/haircut.jpg'
// import haircut from '../../assets/haircut.jpg'

const Service = () => {

    const services = [
        {
            imgSrc: haircut,
            alt: "du blabla",
            title: "Haircut" 
        },
        {
            imgSrc: haircut,
            alt: "du blabla",
            title: "Barbe" 
        },
        {
            imgSrc: haircut,
            alt: "du blabla",
            title: "épilation au fil" 
        }
    ]

    return (
        <section>
            <h2 className='section_title'>nos services</h2>
            <div className='services-container'>
                {services.map((service) => {
                    return (
                        <Card
                            imgSrc={service.imgSrc}
                            alt={service.alt}
                            title={service.title}            
                        />
                    )
                })} 
            </div>
        </section>
        
    );
};

export default Service;