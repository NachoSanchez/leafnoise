import React from 'react';
import styles from './Item.module.css';

const Item = (props) => {
    return (
        <div className={ styles.item + ' ' + styles['fade-in'] }>
            <img src={props.src} alt="..." />
            <h4> { props.name } </h4>
            <p> { props.desc } </p>
        </div>
    )
}

export default Item;