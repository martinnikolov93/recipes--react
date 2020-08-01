import React from 'react';

import { Link } from 'react-router-dom'
import UserContext from '../../Context';

import { isEmptyObject } from '../../utils/helpers'

class Login extends React.Component {
    state = {
        email: '',
        emailErrors: false,
        password: '',
        passwordErrors: false,
    }

    emailValidator = (email) => {
        let emailErrors = {}

        if (!email) {
            emailErrors.required = 'Email is required.';
        }

        if (isEmptyObject(emailErrors)) {
            return false
        }

        return emailErrors
    }

    passwordValidator = (password) => {
        let passwordErrors = {}

        if (!password) {
            passwordErrors.required = 'Password is required.';
        }

        if (isEmptyObject(passwordErrors)) {
            return false
        }

        return passwordErrors
    }

    submitHandler = (event) => {
        event.preventDefault()

        let { email, password } = this.state

        const emailErrors = this.emailValidator(email)
        const passwordErrors = this.passwordValidator(password)

        this.setState({ emailErrors, passwordErrors })

        if (emailErrors || passwordErrors) {
            console.log('form wont be submited')
            return
        }

        fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then((response) => {
            const authToken = response.headers.get('auth-token')
            document.cookie = `auth-token=${authToken}`
            return response.json()
        })
        .then((user) => {
            this.context.logIn(user)
            return user
        })

        console.log('form was submited')
    }

    changeHandlerEmail = (event) => {
        const email = event.target.value
        const emailErrors = this.emailValidator(email)
        this.setState({ email: event.target.value, emailErrors: emailErrors })
    }

    changeHandlerPassword = (event) => {
        const password = event.target.value
        const passwordErrors = this.passwordValidator(password)
        this.setState({ password: password, passwordErrors: passwordErrors })
    }

    render() {
        let { email, emailErrors, password, passwordErrors } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='email'></label>
                        <input className={emailErrors ? "input-error" : ""} id='email' type="email" placeholder="Email" value={email} onChange={this.changeHandlerEmail} />
                        <div className="input-error-text">{emailErrors ? Object.values(emailErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='password'></label>
                        <input className={passwordErrors ? "input-error" : ""} id='password' type="password" placeholder="Password" value={password} onChange={this.changeHandlerPassword} />
                        <div className="input-error-text">{passwordErrors ? Object.values(passwordErrors)[0] : null}</div>
                    </div>
                    <button>Login</button>
                </form>
                <br />
                <div>Don't have an account? Go to <Link to='/register'>Register Page</Link> and create one!</div>
            </div>
        )
    }
}

Login.contextType = UserContext;

export default Login