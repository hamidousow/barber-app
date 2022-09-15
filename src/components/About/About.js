import React from 'react'
import shaggyInPic from '../../assets/shaggy-face.jpg'
import SocialIcon from '../SocialIcons/SocialIcon'
import instagramLogo from '../../assets/instagram.png'
import snapchatLogo from '../../assets/snapchat.png'

const About = () => {

    const tabIcons = [
        { src : instagramLogo,
            alt: 'instagram',
            id: 'instagram-icon',
            className: 'about_social-icon'            
        },   
        { src : snapchatLogo,
            alt: 'snapchat',
            id: 'snapchat-icon',
            className: 'about_social-icon'            
        },   
    ]
    
    return (
        <section id='about'>
            <div className='about_contentWrapper content'>
                
                <div className='about_left'>
                    <h1 className='section_title'>à propos</h1>                    
                    <p className='about_text'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                    </p>
                    <br/>
                    <p className='about_text'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                    </p>
                </div>
                <div className='about_right'>
                    <div className='about_card'>
                        <img src={shaggyInPic} alt='shaggy face' className='about_img'/>
                        <h2 className='subtitle about_subtitle'>Shaggy Barber</h2>
                        <div className='social-icons-wrapper'>
                           {tabIcons.map((icon) => {
                            return (
                                <SocialIcon 
                                    src={icon.src}
                                    alt={icon.alt}
                                    key={icon.id}
                                    className={icon.className}
                                /> 
                            )
                           })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;