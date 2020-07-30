import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";

import UserContext from '../../Context';

const Logout = () => {
    const context = useContext(UserContext)
    context.logOut()

    const history = useHistory()
    history.push('/')
    
    return (
        <>
        </>
    )
}

export default Logout