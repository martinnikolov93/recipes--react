import React, { useContext, useEffect } from 'react';

import { Redirect } from "react-router-dom";

import UserContext from '../../Context';

const Logout = () => {
    const context = useContext(UserContext)

    useEffect(() => {
        context.logOut()
    }, [context])

    return (
        <Redirect to="/" />
    )
}

export default Logout