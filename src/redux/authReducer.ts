import {actionsType} from "./redux_store";
import {authAPI, responseCodes} from "../api/authAPI";
import {Dispatch} from "redux";
import {setError} from "./appReducer";

const SET_AUTH_DATA = 'SET-AUTH-DATA'
const NULL_DATA = 'NULL_DATA'

export type authType = {
    id: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean,
}
const initialState: authType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

//actions types
export type setAuthDataActionType = ReturnType<typeof setAuthData>
export type nullDataActionType = ReturnType<typeof nullData>

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

export const nullData = () => {
    return {
        type: NULL_DATA,
        payload: {
            id: null,
            login: null,
            email: null,
            isAuth: false,
        }
    } as const
}


export const checkMyAuth = () => (dispatch: Dispatch<setAuthDataActionType | nullDataActionType>) => {
    authAPI.checkAuth()
        .then(response => {
                console.log('from then', response)
                if (!response.resultCode) {
                    const {id, login, email} = response.data
                    dispatch(setAuthData(id, login, email))
                } else {
                    dispatch(nullData())
                }
            }
        )
}
export const log = (login: boolean, payload?: { email: string, password: string }) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.log(login, payload)
            .then((res) => {
                if (res.resultCode !== responseCodes.success) {
                    throw new Error(res.messages[0] || 'Unknown error')
                } else {
                    dispatch(checkMyAuth())
                }
            })
            .catch(err => {
                dispatch(setError(err.message))
            })
    }
}

export const authReducer = (state: authType = initialState, action: actionsType) => {
    switch (action.type) {
        case NULL_DATA:
            return {
                ...state,
                ...action.payload,
            }
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
