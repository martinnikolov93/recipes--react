import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <h2 className={styles.logo}>React Recipes</h2>
            <div className={styles['nav-buttons-wrapper']}>
                <NavLink className={styles['nav-button']} to='/' exact activeClassName={styles['nav-button-active']}>Home</NavLink>
                <NavLink className={styles['nav-button']} to='/favourites' activeClassName={styles['nav-button-active']}>Favourites</NavLink>
                <NavLink className={styles['nav-button']} to='/profile' activeClassName={styles['nav-button-active']}>Profile</NavLink>
                <NavLink className={styles['nav-button']} to='/login' activeClassName={styles['nav-button-active']}>Login</NavLink>
                <NavLink className={styles['nav-button']} to='/register' activeClassName={styles['nav-button-active']}>Register</NavLink>
            </div>
        </nav>
    )
}

export default Header