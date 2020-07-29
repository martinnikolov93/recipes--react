import React from 'react';
import Header from '../header/Header';

import styles from './PageLayout.module.css'

const PageLayout = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles['content-wrapper']}>
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout