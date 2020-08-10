const prod = {
    url: {
        API_URL: 'https://recipes-nodejs-rest-api.herokuapp.com/api',
    }
}

const dev = {
    url: {
        API_URL: 'http://localhost:9999/api'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;