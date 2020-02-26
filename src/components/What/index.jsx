import React,{ useContext } from 'react';
import { Title, Body } from '../Article';
import Item from './Item';
import img from '../../assets/img/que-hacemos.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

const What = () => {
    const { english } = useContext(LanguageContext);

    const ENG = {
        section: 'What we do',
        title: 'We create digital solutions',
        body: ["Our goal is to create the future in digital processes, ensuring the optimal use of resources and having a positive effect on the environment",
        "We develop products orientated to facilitating data access in order to speed up procedures and processes within an organization."],
        items: [{
            id: 0,
            name: 'Agility',
            desc: 'To offer the best possible service, so as to meet our clients’ needs.',
            src: 'https://leafnoise.io/img/agilidad.svg'
        },{
            id: 1,
            name: 'Cooperation',
            desc: 'We work side by side with our clients to provide a personalized service.',
            src: 'https://leafnoise.io/img/cooperacion.svg'
        },{
            id: 2,
            name: 'Innovation',
            desc: 'We are always looking for new technologies that can help us provide our clients with the best possible experience.',
            src: 'https://leafnoise.io/img/innovacion.svg'
        }]
    };
    
    const ESP = {
        section: 'Qué hacemos',
        title: 'Brindamos soluciones digitales',
        body: ["Nuestro objetivo es crear el futuro en procesos digitales, velando por el óptimo uso de los recursos, y generando un efecto positivo al medio ambiente.",
        "Desarrollamos productos orientados a facilitar el acceso a los datos para agilizar la gestión de trámites y procesos de una organización."],
        items: [{
            id: 0,
            name: 'Agilidad',
            desc: 'Para ofrecer el mejor servicio y así cumplir velozmente con las necesidades de nuestros clientes.',
            src: 'https://leafnoise.io/img/agilidad.svg'
        },{
            id: 1,
            name: 'Cooperación',
            desc: 'Trabajamos de cerca con todos nuestros clientes para ofrecer un servicio personalizado.',
            src: 'https://leafnoise.io/img/cooperacion.svg'
        },{
            id: 2,
            name: 'Innovación',
            desc: 'Siempre buscamos las últimas tecnologías para brindar la mejor experiencia a nuestros usuarios.',
            src: 'https://leafnoise.io/img/innovacion.svg'
        }]
    };

    const content = english ? ENG : ESP ;
    
    return (
        <section id="que-hacemos">
            <Title text={ content.section }/>
            <Body 
                img = {img}
                title ={ content.title }
                text ={ content.body }
            />
            <div className="container">
                { content.items.map(
                    item => (
                        <Item
                            key = { item.id }
                            name={ item.name }
                            desc={ item.desc }
                            src={ item.src }
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default What;