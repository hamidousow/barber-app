import React from 'react';

const SocialIcon = ({src, alt, className, id}) => {
    return ( 
        <div className='social-icon-container'>
            <img src={src} alt={alt} className={className} key={id}/>
        </div>       
        
    );
};

export default SocialIcon;