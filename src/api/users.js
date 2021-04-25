import Axios from 'axios'
import * as auth from '../auth'

export const list = (page, page_total, search) => {
    const user = auth.getUser()

    return Axios({
        url: '/users',
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        params: {
            page, page_total, search
        }
    })
}
export const detail = (id) => {
    const user = auth.getUser()

    return Axios({
        url: `/users/${id}`,
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
    })
}

export const create = (username, password, firstname, lastname) => {
    const user = auth.getUser()

    return Axios({
        url: `/users`,
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        data: {
            username, password, firstname, lastname
        }
    })
}

export const update = (id, password, firstname, lastname) => {
    const user = auth.getUser()

    return Axios({
        url: `/users/${id}`,
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        data: {
            password, firstname, lastname
        }
    })
}

export const destroy = (id) => {
    const user = auth.getUser()

    return Axios({
        url: `/users/${id}/delete`,
        baseURL: 'https://asia-southeast2-api-mos-dev.cloudfunctions.net/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
}