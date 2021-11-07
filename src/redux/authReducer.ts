import {actionsType} from "./redux_store";

const SET_AUTH_DATA = 'SET-AUTH-DATA'

export type authType = {
    id: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean
}
const initialState: authType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

//actions types
export type setAuthDataActionType = ReturnType<typeof setAuthData>

//action creators
export const setAuthData = (id: number, login: string, email: string) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            id,
            login,
            email,
        }
    } as const
}

export const authReducer = (state: authType = initialState, action: actionsType) => {
    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default:
            return state
    }
}