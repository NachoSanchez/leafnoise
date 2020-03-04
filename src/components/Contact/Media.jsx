import React from 'react';
import styles from './Contact.module.css'

const Media = (props) => {
    return (
        <a 
            href={ props.href } 
            className={ styles.media }>
            
            <img src={ props.icon } alt={ props.type }/>

            <h5>{ props.type }</h5>
            <p>
                { props.text }
            </p>
        </a>
    )
}

export default Media;