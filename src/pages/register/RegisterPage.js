import React, { useEffect } from 'react';
import PageLayout from '../../components/page-layout/PageLayout';
import Register from '../../components/register/Register';

const RegisterPage = () => {
    useEffect(() => {
        document.title = 'Register | Recipes'
    }, [])

    return (
        <PageLayout>
            <h2>Create an account</h2>
            <Register />
        </PageLayout>
    )
}

export default RegisterPage