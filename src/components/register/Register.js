import React from 'react';
import { Link } from 'react-router-dom'
import { isEmptyObject } from '../../utils/helpers'
import UserContext from '../../Context';
import { config } from './utils/constants'

class Register extends React.Component {
    state = {
        email: '',
        emailErrors: false,
        password: '',
        passwordErrors: false,
        rePassword: '',
        rePasswordErrors: false
    }

    passwordValidator = (password) => {
        let passwordErrors = {}

        if (!password) {
            passwordErrors.required = 'Password is required.';
        }

        if (password.length < 5) {
            passwordErrors.length = 'Password must be at least 5 characters.';
        }

        if (isEmptyObject(passwordErrors)) {
            return false
        }

        return passwordErrors
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

    rePasswordValidator = (rePassword) => {
        const password = this.state.password

        let rePasswordErrors = {}

        if (!rePassword) {
            rePasswordErrors.required = 'Re-Password is required.';
        }

        if (password !== rePassword) {
            rePasswordErrors.doesNotMatch = 'Passwords does not match.';
        }

        if (isEmptyObject(rePasswordErrors)) {
            return false
        }

        return rePasswordErrors
    }

    submitHandler = (event) => {
        event.preventDefault()

        let { email, password, rePassword } = this.state

        const emailErrors = this.emailValidator(email)
        const passwordErrors = this.passwordValidator(password)
        const rePasswordErrors = this.rePasswordValidator(rePassword)

        this.setState({ emailErrors, passwordErrors, rePasswordErrors })

        if (emailErrors || passwordErrors || rePasswordErrors) {
            return
        }

        fetch(config.url.API_URL + '/user/register', {
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
                if (response.headers.get('error') === 'email-taken') {
                    return 'error'
                }

                const authToken = response.headers.get('auth-token')
                document.cookie = `auth-token=${authToken}`
                return response.json()
            })
            .then((user) => {
                if (user === 'error') {
                    let errors = {}
                    errors.taken = 'Email is already taken!'
                    this.setState({ emailErrors: errors })
                    return
                }

                this.context.logIn(user)
            })
            .catch((err) => console.log(err))
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


    changeHandlerRePassword = (event) => {
        const rePassword = event.target.value
        const rePasswordErrors = this.rePasswordValidator(rePassword)
        this.setState({ rePassword: rePassword, rePasswordErrors: rePasswordErrors })
    }

    render() {
        let { email, emailErrors, password, passwordErrors, rePassword, rePasswordErrors } = this.state

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
                    <div>
                        <label htmlFor='rePassword'></label>
                        <input className={rePasswordErrors ? "input-error" : ""} id='rePassword' type="password" placeholder="Repeat Password" value={rePassword} onChange={this.changeHandlerRePassword} />
                        <div className="input-error-text">{rePasswordErrors ? Object.values(rePasswordErrors)[0] : null}</div>
                    </div>
                    <button>Register</button>
                </form>
                <br />
                <div>Already have an account? Go to <Link to='/login'>Login Page</Link></div>
            </div>
        )
    }
}

Register.contextType = UserContext;

export default Register