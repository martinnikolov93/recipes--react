import React from 'react';
import PageLayout from '../../components/page-layout/PageLayout';
import Login from '../../components/login/Login';

const LoginPage = () => {
    return (
        <PageLayout>
            <h2>Login</h2>
            <Login />
        </PageLayout>
    )
}

export default LoginPage