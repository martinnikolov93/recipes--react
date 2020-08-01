import React from 'react';

const UserContext = React.createContext({
    loggedIn: false,
    user: {
        favourites: [],
        recipes: []
    },
    logIn: () => {},
    logOut: () => {},
})

export default UserContext