import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Navlinks= () => {
    const { english } = useContext(LanguageContext);
    
    return english ? (
       <ul>
           <li><a href="#que-hacemos">What we do</a></li>
           <li><a href="#servicios">Services</a></li>
           <li><a href="#productos">Products</a></li>
           <li><a href="#clientes">Clients</a></li>
           <li><a href="#contacto">Contact us</a></li>
       </ul> 
    ) : (
        <ul>
            <li><a href="#que-hacemos">Qué hacemos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    )
}

export default Navlinks;