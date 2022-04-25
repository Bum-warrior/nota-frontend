import { createContext, useReducer, useContext } from 'react'
import * as React from 'react';

export type Action = "setToken";
export type State = typeof deafaultState

const deafaultState = {
    token: ''
}

const UserContext = createContext(undefined);

function userReducer(state: State, action: Action) {

}

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(userReducer, deafaultState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)

    if (!context) throw new Error("Must be used inside Provider")

    return context
}