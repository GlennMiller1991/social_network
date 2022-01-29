import {actionsType} from "./redux_store";
import {setPosts} from "./postsReducer";
import {batch} from "react-redux";
import {checkMyAuth} from "./authReducer";
import {Dispatch} from "redux";

const SET_ERROR = 'SET_ERROR'
const INITIALIZING = 'INITIALIZING'

//actions and types
export type setErrorActionType = ReturnType<typeof setError>
export type initializingActionType = ReturnType<typeof initializing>
export const setError = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {
            error,
        }
    } as const
}
export const initializing = () => {
    return {
        type: INITIALIZING,
        payload: {
            isInitialized: true,
        }
    } as const
}
export const initializingThunk = () => (dispatch: Dispatch<any>) => {
    //@ts-ignore
    VK.Auth.login((res: vkSessionType) => {
            if (res.status === 'connected') {
                //@ts-ignore
                VK.Api.call('wall.get', {v: 5.131, owner_id: -34215577}, (res: vkWallGetResponseType) => {
                        if (res.response.items.length) {
                            dispatch(setPosts(res.response.items))
                        }
                        batch(() => {
                                dispatch(checkMyAuth())
                                dispatch(initializing())
                            }
                        )
                    }
                )
            }
        }
    )
}


export type appStateType = typeof initialState
const initialState = {
    error: '' as string,
    isInitialized: false as boolean,
}

export const appReducer = (state: appStateType = initialState, action: actionsType) => {
    switch (action.type) {
        case SET_ERROR:
        case INITIALIZING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}