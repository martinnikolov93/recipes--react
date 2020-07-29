import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import FavouritesPage from './pages/favourites/FavouritesPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/favourites' component={FavouritesPage} />
                <Route path='/profile' component={ProfilePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router