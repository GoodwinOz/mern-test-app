import {createContext} from 'react'

//Default func. value
function noop() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})