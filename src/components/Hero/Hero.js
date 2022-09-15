import React from 'react'
import Logo from '../Logo/Logo';


const Hero = () => {
    return (
        <section className="section hero_background" id='hero'>            
            <Logo/>
            <span className='hero_callToAction'>
                <a href='/#about' >scroll</a>
            </span>            
        </section>
    );
};

export default Hero;