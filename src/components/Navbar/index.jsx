import React, { useEffect, useState, } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo.svg';
import Navlinks from './Navlinks';
import ToggleLanguage from './ToggleLanguage'

const Navbar = () => {
    //Evento scroll
    const [ scroll, setScroll ] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY);     
        })
    }, []);
    
    const scrolled = scroll > 200;
    const scrolledBg = styles.navigation + ' ' + styles.scrolled;

    return(
        <nav className={ scrolled ? scrolledBg : styles.navigation }>
            <a href="#home" className={ styles.logo}>
                <img src={logo} alt="Leafnoise Company"/>
            </a>
            <div>
                <Navlinks />
                <ToggleLanguage />
            </div>
        </nav>
    )
}

export default Navbar;