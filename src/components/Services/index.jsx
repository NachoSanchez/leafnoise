import React, { useContext } from 'react';
import { Title, Body } from '../Article';
import img from '../../assets/img/servicios.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

const Servicios = () => {
    const { english } = useContext(LanguageContext);

    const ENG = {
        section: 'Services',
        title: 'Artificial Intelligence - Machine Learning',
        body: ["Through Machine Learning solutions, you can automatize load processes and document analysis, making non structured data into processable information.",
        "Implementing models and machine learning networks, with the use of Named Entity Recognition you will be able to extract entities from documents and forms, both in text images (ICR) and digital documents."]
    };

    const ESP = {
        section: 'Servicios',
        title: 'Inteligencia Artificial - Machine Learning',
        body: ["A través de soluciones de Machine Learning, automatizá procesos de carga y análisis de documentos, convirtiendo datos no estructurados en información procesable.",
        "Implementando modelos y redes de machine learning, podrás extraer entidades nombradas (NER) de documentos y formularios, tanto para texto imagen (ICR) como para documentos digitales."]
    };

    const content = english ? ENG : ESP ;

    return (
        <section id="servicios">
            <Title text={ content.section }/>
            <Body 
                img = {img}
                title ={ content.title }
                text ={ content.body }
            />
        </section>
    )
}

export default Servicios;

