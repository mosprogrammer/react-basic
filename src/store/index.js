import * as auth from '../auth'
import {
    createContext,
    useReducer,
} from 'react'

const login = auth.getUser()

const initialState = {
    navbar: {
        expanded: false
    },
    user: login.user || {
        id: "",
        updatedAt: null,
        createdAt: null,
        lastname: "",
        username: "",
        firstname: ""
    },
    token: login.token,
    expired: login.expired,
}

const reducer = (state, data) => {

    // console.log('reducer', state, data);

    switch (data.action) {
        case 'TOGGLE_NAVBAR':
            return {
                ...state,
                navbar: {
                    ...state.navbar,
                    expanded: data.payload.expanded,
                },
            }
        case 'LOGIN':
            return {
                ...state,
                ...data.payload,
            }
        default:
            return state
    }
}

export const actions = {
    toggleNavbar(expanded) {
        return {
            action: 'TOGGLE_NAVBAR',
            payload: { expanded }
        }
    },
    login(user, token, expired) {
        auth.setUser(user, token, expired)

        return {
            action: 'LOGIN',
            payload: { user, token, expired }
        }
    }
}

export const Context = createContext(initialState)

export const ContextProvider = (props) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ value, dispatch }}>{props.children}</Context.Provider>
    )
}