import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './PageLayout.module.css'

const PageLayout = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles['content-wrapper']}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout