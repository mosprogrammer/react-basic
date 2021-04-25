import {
    createContext,
    useReducer,
} from 'react'

const initialState = {
    navbar: {
        expanded: false
    }
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
    }
}

export const Context = createContext(initialState)

export const ContextProvider = (props) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ value, dispatch }}>{props.children}</Context.Provider>
    )
}