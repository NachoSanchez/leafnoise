import React, { useContext } from 'react';
import { Title } from '../Article';
import Card from './Card';
import { LanguageContext } from '../../contexts/LanguageContext';

const Products = () => {
    const { english } = useContext(LanguageContext);

    const ENG = {
        section: 'Our Products',
        products: [{
            id: 0,
            name: 'moorea',
            logo: 'https://leafnoise.io/img/moorea.svg',
            bg: 'https://leafnoise.io/img/bg-moorea.svg',
            desc: 'Paperless web platform and data collection.',
            functions: [
                'Process modeling',
                'Online design and editing of web forms',
                'Digital signer',
                'Electronic files',
                'Polls',
                'Data mining'
            ],
            link: 'https://moorea.io/'
        },{
            id: 1,
            name: 'cipres',
            logo: 'https://leafnoise.io/img/cipres.svg',
            bg: 'https://leafnoise.io/img/bg-cipres.svg',
            desc: 'Commercial assets planning platform.',
            functions: [
                'Integration with AFIP’s digital invoice',
                'Providers, clients, affiliates and product managing',
                'Product entry and exit',
                'E-commerce platform, integrated with payment and shipping options'
            ],
            link: 'https://cipres.io/'
        }]
    };

    const ESP = {
        section: 'Nuestros Productos',
        products: [{
            name: 'moorea',
            logo: 'https://leafnoise.io/img/moorea.svg',
            bg: 'https://leafnoise.io/img/bg-moorea.svg',
            desc: 'Plataforma web de despapelización y recolección de información.',
            functions: [
                'Modelado de procesos',
                'Diseño y edicion online de formularios web',
                'Firmador digital',
                'Expediente electronico',
                'Encuestas',
                'Explotacion de datos'
            ],
            link: 'https://moorea.io/'
        },{
            name: 'cipres',
            logo: 'https://leafnoise.io/img/cipres.svg',
            bg: 'https://leafnoise.io/img/bg-cipres.svg',
            desc: 'Plataforma de planificacion de recursos comerciales.',
            functions: [
                'Integración con Factura Electrónica de AFIP',
                'Gestión de proveedores, clientes, afiliados y productos',
                'Ingreso y egreso de mercaderia',
                'Plataforma e-commerce con integración de medios de pago y envío a domicilio'
            ],
            link: 'https://cipres.io/'
        }]
    };

    const content = english ? ENG : ESP ;

    return (
        <section id="productos">
            <Title text={content.section} />

            <div className="container"> 
                { content.products.map( product => (
                    <Card 
                        key = { product.id }
                        name = { product.name }
                        logo = { product.logo }
                        bg = { product.bg }
                        desc = { product.desc }
                        functions = { product.functions }
                        link = { product.link }
                    />
                ))}
            </div>

        </section>
    )
}

export default Products;