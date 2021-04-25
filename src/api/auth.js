import Axios from 'axios'

export const register = (username, password, firstname, lastname) => {
    return Axios({
        url: '/register',
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            username, password, firstname, lastname
        }
    })
}
export const login = (username, password) => {
    return Axios({
        url: '/login',
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            username, password
        }
    })
}