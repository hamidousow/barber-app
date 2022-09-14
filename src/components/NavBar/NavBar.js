import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shaggy-barber-logo.png'

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
                <Link className='nav_link nav_logo' to='/'>
                    <img src={logo} alt='go home'/>
                </Link>
            </div>
            <ul className='nav_menu'> 
                <Link className='nav_link' to='/'>À propos</Link>                
                <Link className='nav_link' to='/Tarifs'>Tarifs</Link>
                <Link className='nav_link' to='/'>Réservation</Link>
                <Link className='nav_link' to='/'>Se connecter</Link>            
            </ul>
        </nav>
        
    );
};

export default NavBar;