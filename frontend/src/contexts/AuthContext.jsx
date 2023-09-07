

import { createContext, useReducer, useEffect } from 'react'


export const AuthContext = createContext();


export const AuthReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return { kullanici: action.payload }

        case 'LOGOUT':
            return { kullanici: null }

        default:
            return state
    }

}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, {
        kullanici: null
    })

    useEffect(() => {
        const kullanici = JSON.parse(localStorage.getItem('kullanici'))

        if (kullanici) {
            dispatch({ type: 'LOGIN', payload: kullanici })
        }
    }, [])

    console.log('AuthContext state: ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
        )
    }
export default AuthContextProvider  