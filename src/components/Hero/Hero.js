import React from 'react'
import logotype from '../../assets/shaggy-barber-logotype.png'

const Hero = () => {
    return (
        <section className="section hero_background" id='hero'>            
            <div>
                <img src={logotype} alt='welcome to shaggy barber' className='hero_logo'/>
            </div>
            <span className='hero_callToAction'>
                <a href='/' >scroll</a>
            </span>            
        </section>
    );
};

export default Hero;