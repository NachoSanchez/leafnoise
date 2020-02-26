import React from 'react';
import styles from './Index.module.css';

export const Title = (props) => {
    return (
        <div className={styles.title}>
            <h3>{ props.text }</h3>
        </div>
    )
}


export const Body = (props) => {

    const text = props.text

    return (
        <div className={styles.article}>
            <img src={props.img} alt="..."/>
            <div>
                <h4> {props.title} </h4>
                
                { text.map( p => ( <p> {p} </p> )) }
                 
            </div>
        </div>
    )
}

