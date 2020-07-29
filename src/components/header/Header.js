import React from 'react'

import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <span className={styles.logo}>Recipes</span>
            <div className={styles['nav-buttons-wrapper']}>
                <Link className={styles['nav-button']} to='/'>Home</Link>
                <Link className={styles['nav-button']} to='/profile'>Profile</Link>
                <Link className={styles['nav-button']} to='/login'>Login</Link>
                <Link className={styles['nav-button']} to='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default Header