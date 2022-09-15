import React from 'react';
import logotype from '../../assets/shaggy-barber-logotype.png'

const Logo = () => {
    return (
        <div>
            <img src={logotype} alt='welcome to shaggy barber' className='main-logo'/>
        </div>
    );
};

export default Logo;