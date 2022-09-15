import React from 'react'
import shaggyInPic from '../../assets/shaggy-face.jpg'
import SocialIcon from '../SocialIcons/SocialIcon'
import instagramLogo from '../../assets/instagram.png'
import snapchatLogo from '../../assets/snapchat.png'
import aboutText from '../../data/AboutText'
import Text from '../Text/Text'

const About = () => {

    const tabIcons = [
        { src : instagramLogo,
            alt: 'instagram',
            id: 'instagram-icon',
            className: 'about_social-icon',
            link: '/'            
        },   
        { src : snapchatLogo,
            alt: 'snapchat',
            id: 'snapchat-icon',
            className: 'about_social-icon', 
            link: '/'           
        },   
    ]
    
    return (
        <section id='about'>
            <div className='about_contentWrapper content'>
                
                <div className='about_left'>
                    <h1 className='section_title'>à propos</h1>
                    {aboutText.map((para) => {
                        return <Text text={para.paragraphe} key={para.id}/>
                    })}                    
                    
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
                                    link={icon.link}
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