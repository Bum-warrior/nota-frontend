import { Children } from 'react'
import {AuthContext} from './AuthContext'
import React from 'react'

interface AuthProps{
    children : JSX.Element | JSX.Element []
}

export const AuthProvider = (porps : AuthProps) => {
    return(
    <AuthContext.Provider value={{}}>
        {porps.children}
    </AuthContext.Provider>
    )
}