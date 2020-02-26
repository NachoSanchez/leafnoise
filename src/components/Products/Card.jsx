import React, { useContext } from 'react';
import styles from './Card.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';


const Card = (props) => {
    const{ english } = useContext(LanguageContext);

    return (
        <div 
            className={ styles.card  } 
            style = {{backgroundImage: `url(${props.bg})`}}
            key = { props.id }
        >
            <img src={props.logo} alt={props.name}/>
            <h5> { props.desc } </h5>
            <ul>
                { props.functions.map( func => (

                    <li>
                        { func }
                    </li>

                ))}
            </ul>
            <a href={ props.link }> 
                { english ? 'More info' : 'Más información'}
            </a>
        </div>
    )
}

export default Card;