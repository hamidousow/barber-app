import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer>
            <Logo/>
                <ul className='footer_menu'>
                    <li className='footer_link'>
                        <a href='/'> Mentions légales </a>
                    </li>
                    <li className='footer_link'>
                        <a href='/'> Nos services </a>
                    </li>
                    <li className='footer_link'>
                        <a href='/'> Tarifs </a>
                    </li>
                    <li className='footer_link'>
                        <a href='/'> Réservation </a>
                    </li>
                    <li className='footer_link'>
                        <a href='/'>  Se connecter </a>
                    </li>                    
                </ul>
        
        </footer>
    );
};

export default Footer;