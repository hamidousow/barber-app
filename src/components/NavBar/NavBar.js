import React, { useState } from 'react';
import logo from '../../assets/images/shaggy-barber-logo.png'

const NavBar = () => {

    const [navShadowBox, setNavShadowBox] = useState(false); 

    const isScrolling = () => {
        if(window.scrollY >= 50) {
            setNavShadowBox(false)
        }
    }
    
    window.addEventListener('scroll', isScrolling);

    return (
        <nav className={navShadowBox ? 'nav nav-active' : 'nav'}>
            <div>
                <a className='nav_link nav_logo' href='/'>
                    <img src={logo} alt='go home'/>
                </a>
            </div>
            <ul className='nav_menu'> 
                <a className='nav_link' href='/'>À propos</a>                
                <a className='nav_link' href='/'>Tarifs</a>
                <a className='nav_link' href='/'>Réservation</a>
                <a className='nav_link' href='/'>Se connecter</a>
            </ul>
        </nav>
        
    );
};

export default NavBar;