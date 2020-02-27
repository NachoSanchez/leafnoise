import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Navlinks= () => {
    const { english } = useContext(LanguageContext);

    const ENG = [
        {title: 'What we do', href: '#que-hacemos'},
        {title: 'Services', href: '#servicios'},
        {title: 'Products', href: '#productos'},
        {title: 'Clients', href: '#clientes'},
        {title: 'Contact', href: '#contacto'}
    ]

    const ESP = [
        {title: 'Qué hacemos', href: '#que-hacemos'},
        {title: 'Servicios', href: '#servicios'},
        {title: 'Productos', href: '#productos'},
        {title: 'Clientes', href: '#clientes'},
        {title: 'Contacto', href: '#contacto'}
    ]

    const links = english ? ENG : ESP

    
    return  (
       <ul>
           {
               links.map( link => (
                   <li>
                       <a href={ link.href }>
                           { link.title }
                       </a>
                   </li>
               ))
           }
       </ul> 
    ) 
}

export default Navlinks;