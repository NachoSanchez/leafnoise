import React, { useContext } from 'react';
import styles from './Home.module.css';
import img from '../../assets/img/home.svg'
import { LanguageContext } from '../../contexts/LanguageContext'

const Home = () => {
    const { english } = useContext(LanguageContext);

    return english ? (
        <section id="home" className={styles.home}>
            <div className={styles['home-text-container']}>
                <h1>Creating future in technology</h1>
                <p>
                    We offer an all-around solution, from the development to the maintenance 
                    of 100% digital products to simplify processes and operations.
                </p>
            </div>
            <img src={img} alt="..."/>
        </section>
    ) : (
        <section id="home" className={styles.home} >
            <div>
                <h1>Creando el futuro en tecnología</h1>
                <p>
                    Ofrecemos una solución integral, desde el desarrollo hasta el mantenimiento, 
                    de productos 100% digitales para facilitar procesos y operaciones. 
                </p>
            </div>
            <img src={img} alt="..."/>
        </section> 
    )
}

export default Home;