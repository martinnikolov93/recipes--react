import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { IconContext } from 'react-icons'
import styles from './PageLayout.module.css'

const PageLayout = (props) => {
    return (
        <div className={styles.wrapper}>
            <IconContext.Provider value={{ color: "#ff3939", size: '2em' }}>
                <Header />
                <main className={styles['content-wrapper']}>
                    {props.children}
                </main>
                <Footer />
            </IconContext.Provider>
        </div>
    )
}

export default PageLayout