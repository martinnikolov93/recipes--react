import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import UserContext from '../../Context'

const Header = () => {
    const context = useContext(UserContext)

    return (
        <nav className={styles.navigation}>
            <h2 className={styles.logo}>React Recipes</h2>
            <div className={styles['nav-buttons-wrapper']}>
                <NavLink className={styles['nav-button']} to='/' exact activeClassName={styles['nav-button-active']}>Home</NavLink>
                {context.loggedIn
                    ?
                    <>
                        <NavLink className={styles['nav-button']} to='/recipe/add' activeClassName={styles['nav-button-active']}>Add Recipe</NavLink>
                        <NavLink className={styles['nav-button']} to='/favourites' activeClassName={styles['nav-button-active']}>Favourites</NavLink>
                        <NavLink className={styles['nav-button']} to='/profile' activeClassName={styles['nav-button-active']}>Profile</NavLink>
                        <NavLink className={styles['nav-button']} to='/logout'>Logout</NavLink>
                    </>
                    :
                    <>
                        <NavLink className={styles['nav-button']} to='/login' activeClassName={styles['nav-button-active']}>Login</NavLink>
                        <NavLink className={styles['nav-button']} to='/register' activeClassName={styles['nav-button-active']}>Register</NavLink>
                    </>
                }
            </div>
        </nav>
    )
}

export default Header