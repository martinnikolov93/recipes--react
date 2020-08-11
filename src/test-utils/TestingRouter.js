import React from 'react';
import UserContext from '../Context';
import { BrowserRouter, Route } from 'react-router-dom'

const TestingRouter = ({user, children}) => {
    return (
        <BrowserRouter>
            <Route>
                <UserContext.Provider value={user}>
                    {children}
                </UserContext.Provider>
            </Route>
        </BrowserRouter>
    )
}

export default TestingRouter