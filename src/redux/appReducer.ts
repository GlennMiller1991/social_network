import {actionsType} from "./redux_store";

const SET_ERROR = 'SET_ERROR'

//actions and types
export type setErrorActionType = ReturnType<typeof setError>
export const setError = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {
            error,
        }
    } as const
}

type appStateType = typeof initialState
const initialState = {
    error: '' as string,
}

export const appReducer = (state: appStateType = initialState, action: actionsType) => {
    switch(action.type) {
        case SET_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}