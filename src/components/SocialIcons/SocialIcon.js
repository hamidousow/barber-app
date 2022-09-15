import React from 'react';

const SocialIcon = ({src, alt, className, id, link}) => {
    return (
        <a href={link} className='social-icon-container'>
            <img src={src} alt={alt} className={className} key={id}/>
        </a>
    );
};

export default SocialIcon;