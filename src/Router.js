import React, { useContext } from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import UserContext from './Context';

import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import FavouritesPage from './pages/favourites/FavouritesPage';
import LogoutPage from './pages/logout/LogoutPage';
import AddRecipePage from './pages/recipes/add-recipe/AddRecipePage';
import ViewRecipePage from './pages/recipes/view-recipe/ViewRecipePage';

const Router = () => {
    const context = useContext(UserContext)
    console.log(context)
    return (
        <BrowserRouter>
            <Switch>
                {/* --Public routes-- */}
                <Route path='/' exact component={HomePage}></Route>
                <Route path='/recipe/view/:id' component={ViewRecipePage}></Route>
                {/* --Auth routes-- */}
                <Route path='/recipe/add'>{context.loggedIn ? <AddRecipePage /> : <Redirect to="/" />}</Route>
                <Route path='/favourites'>{context.loggedIn ? <FavouritesPage /> : <Redirect to="/" />}</Route>
                <Route path='/profile'>{context.loggedIn ? <ProfilePage /> : <Redirect to="/" />}</Route>
                <Route path='/logout'>{context.loggedIn ? <LogoutPage /> : <Redirect to="/" />}</Route>
                {/* --Unauth routes-- */}
                <Route path='/login'>{!context.loggedIn ? <LoginPage /> : <Redirect to="/" />}</Route>
                <Route path='/register'>{!context.loggedIn ? <RegisterPage /> : <Redirect to="/" />}</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router