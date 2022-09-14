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
            title: "Haircut",
            id: "12" 
        },
        {
            imgSrc: haircut,
            alt: "du blabla",
            title: "Barbe",
            id: "23" 
        },
        {
            imgSrc: haircut,
            alt: "du blabla",
            title: "épilation au fil",
            id: "34" 
        }
    ]

    return (
        <section id="section-services">
            <h2 className='section_title'>nos services</h2>
            <div className='services-container content'>
                {services.map((service) => {
                    return (
                        <Card
                            imgSrc={service.imgSrc}
                            alt={service.alt}
                            title={service.title}  
                            key={service.id}          
                        />
                    )
                })} 
            </div>
        </section>
        
    );
};

export default Service;