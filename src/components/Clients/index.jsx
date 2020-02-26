import React,{ useContext } from 'react';
import { Title } from '../Article';
import styles from './Clients.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const Clients = () => {
    const { english } = useContext(LanguageContext);

    const ENG = {
        section: 'Our clients',
        clients: [
            {
                id: 0,
                name: 'ENACOM',
                logo: 'https://leafnoise.io/img/clientes/cliente-1.jpg',
                url: 'https://www.enacom.gob.ar/'
            },{
                id: 1,
                name: 'Aduana Nacional',
                logo:'https://leafnoise.io/img/clientes/cliente-2.jpg',
                url: 'https://www.aduana.gob.bo/aduana7/'
            },{
                id: 2,
                name: 'DroFar',
                logo:'https://leafnoise.io/img/clientes/cliente-4old.jpg', 
                url: 'http://www.drofar.com.ar/'
            },{
                id: 3,
                name: 'ORIEN | Salud en movimiento',
                logo: 'https://leafnoise.io/img/clientes/cliente-3.jpg',
                url: 'http://www.orien.com.ar/'
            },{
                id: 4,
                name: 'Ministerio de transporte | Presidencia de la Nación',
                logo: 'https://leafnoise.io/img/clientes/cliente-5.jpg',
                url: 'https://www.argentina.gob.ar/transporte'
            },{
                id: 5,
                name: 'AFIP | Administración Federal de Ingresos Públicos',
                logo: 'https://leafnoise.io/img/clientes/cliente-6.jpg',
                url: 'http://afip.gob.ar/sitio/externos/default.asp'
            },{
                id: 6,
                name: 'ANSES',
                logo: 'https://leafnoise.io/img/clientes/cliente-7.jpg',
                url: 'https://www.anses.gob.ar/' 
            },{
                id: 7,
                name: 'Red Hat - We Make Open Source Technologies',
                logo: 'https://leafnoise.io/img/clientes/cliente-8.jpg',
                url: 'https://www.redhat.com/en'
            },{
                id: 8,
                name: 'Banco Galicia Éminent',
                logo: 'https://leafnoise.io/img/clientes/cliente-9.svg',
                url: 'https://www.bancogalicia.com/banca/online/web/Eminent'
            }
        ]
    };

    const ESP = {
        section: 'Nuestros clientes',
        clients: [
            {
                id: 0,
                name: 'ENACOM',
                logo: 'https://leafnoise.io/img/clientes/cliente-1.jpg',
                url: 'https://www.enacom.gob.ar/'
            },{
                id: 1,
                name: 'Aduana Nacional',
                logo:'https://leafnoise.io/img/clientes/cliente-2.jpg',
                url: 'https://www.aduana.gob.bo/aduana7/'
            },{
                id: 2,
                name: 'DroFar',
                logo:'https://leafnoise.io/img/clientes/cliente-4old.jpg', 
                url: 'http://www.drofar.com.ar/'
            },{
                id: 3,
                name: 'ORIEN | Salud en movimiento',
                logo: 'https://leafnoise.io/img/clientes/cliente-3.jpg',
                url: 'http://www.orien.com.ar/'
            },{
                id: 4,
                name: 'Ministerio de transporte | Presidencia de la Nación',
                logo: 'https://leafnoise.io/img/clientes/cliente-5.jpg',
                url: 'https://www.argentina.gob.ar/transporte'
            },{
                id: 5,
                name: 'AFIP | Administración Federal de Ingresos Públicos',
                logo: 'https://leafnoise.io/img/clientes/cliente-6.jpg',
                url: 'http://afip.gob.ar/sitio/externos/default.asp'
            },{
                id: 6,
                name: 'ANSES',
                logo: 'https://leafnoise.io/img/clientes/cliente-7.jpg',
                url: 'https://www.anses.gob.ar/' 
            },{
                id: 7,
                name: 'Red Hat - We Make Open Source Technologies',
                logo: 'https://leafnoise.io/img/clientes/cliente-8.jpg',
                url: 'https://www.redhat.com/en'
            },{
                id: 8,
                name: 'Banco Galicia Éminent',
                logo: 'https://leafnoise.io/img/clientes/cliente-9.svg',
                url: 'https://www.bancogalicia.com/banca/online/web/Eminent'
            }
        ]
    };

    const content = english ? ENG : ESP ;

    return (
        <section id="clientes">

            <Title text={ content.section } />

            <div className={ styles.container }>
            { content.clients.map( client => (

                <div className={ styles.client } key={ client.id }>
                    <a 
                        href={`${client.url}`}  
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            
                        <img src={ client.logo } alt={ client.name } />
                        { client.link }
                    </a>
                </div>

            ))}
            </div>

        </section>
    )
}

export default Clients;