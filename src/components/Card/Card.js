import React from 'react';

const Card = ({imgSrc, alt, title}) => {
    return (
        
        <div className='service_card'>
            <img src={imgSrc} alt={alt}/>
            <h2 className='subtitle'>{title}</h2>
        </div>
        
    );
};

export default Card;