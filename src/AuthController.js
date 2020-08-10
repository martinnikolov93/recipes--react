import React from 'react';
import UserContext from './Context'
import { getCookie } from './utils/helpers'
import { config } from './utils/constants'

class AuthController extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
            user: {
                favourites: [],
                recipes: []
            }
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        document.cookie = "auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        this.setState({
            loggedIn: false,
            user: {
                favourites: [],
                recipes: []
            }
        })
    }

    componentDidMount() {
        const token = getCookie('auth-token')

        if (!token) {
            this.logOut()
            return
        }

        fetch(config.url.API_URL + '/user/verify', {
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            if (response.status) {
                this.logIn(response.user)
            } else {
                this.logOut()
            }
        })
    }

    render() {
        const {
            loggedIn,
            user
        } = this.state

        if (loggedIn === null) {
            return (<div>Loading...</div>)
        }

        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default AuthController