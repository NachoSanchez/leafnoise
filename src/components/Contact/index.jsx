import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import email from '../../assets/img/correo_electronico.svg';
import Media from './Media';
import styles from './Contact.module.css';

const Contact = () => {
    const { english } = useContext(LanguageContext);

    const ENG = [
        {
            type: 'Telephone',
            icon: 'https://leafnoise.io/img/telefono.svg',
            text: '+54 11 4373 2539',
            href: 'tel:1143732539'
        },
        {
            type: 'Location',
            icon: 'https://leafnoise.io/img/ubicacion.svg',
            text: 'San Martín 439 Floor 3 Sector B, Buenos Aires',
            href: ''
        },{
            type: 'Email',
            icon:  email ,
            text: 'info@leafnoise.io',
            href: 'mailto:info@leafnoise.io'
        }
    ];

    const ESP = [
        {
            type: 'Teléfono',
            icon: 'https://leafnoise.io/img/telefono.svg',
            text: '+54 11 4373 2539',
            href: 'tel:1143732539'
        },
        {
            type: 'Ubicación',
            icon: 'https://leafnoise.io/img/ubicacion.svg',
            text: 'San Martín 439 Piso 3 Sector B, Buenos Aires',
            href: 'https://www.google.com/maps/place/San+Mart%C3%ADn+439,+C1004AAI+CABA/@-34.6028207,-58.3746067,18z/data=!4m5!3m4!1s0x95bccacd1cba729d:0x50a4cb75d5aa03e6!8m2!3d-34.602891!4d-58.3738186'
        },{
            type: 'Correo Electrónico',
            icon: email ,
            text: 'info@leafnoise.io',
            href: 'mailto:info@leafnoise.io'
        }
    ];

    const content = english ? ENG : ESP ;

    return (
        <footer id="contacto" className={ styles.footer }>
            <div className="container">
                {
                    content.map( cont => (
                        <Media 
                            href={`${cont.href}`}
                            icon={ cont.icon }
                            text={ cont.text }
                            type={ cont.type }
                        />   
                    ))
                }

            </div>
            <div className="container">
                <a href="http://qr.afip.gob.ar/?qr=IcULHqGE78XdSL0cPLUa3Q,," 
                        target="_blank" rel="noopener noreferrer">
                        <img src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"  alt="AFIP QR"/>
                </a>
            </div>
        </footer>
    )
}

export default Contact;