import React from 'react';
import styles from './Contact.module.css'

const Media = (props) => {
    return (
        <a 
            href={ props.href } 
            target="_blank" 
            rel="noopener noreferrer"
            className={ styles.media + ' ' + styles['fade-in'] }>
            
            <img src={ props.icon } alt={ props.type }/>

            <h5>{ props.type }</h5>
            <p>
                { props.text }
            </p>
        </a>
    )
}

export default Media;