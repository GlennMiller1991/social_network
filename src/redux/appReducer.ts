import {actionsType} from "./redux_store";
import {setPosts, vkPostType} from "./postsReducer";
import {batch} from "react-redux";
import {checkMyAuth, setVkIsAuth} from "./authReducer";
import {Dispatch} from "redux";
import {vkWallGetResponseType, vkSessionType, successResponseType, errorResponseType} from "../api/vkAPI";

const SET_ERROR = 'SET_ERROR'
const INITIALIZING = 'INITIALIZING'
export const defaultPageSize = 10

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
export const initializingThunk = (count?: number) => (dispatch: Dispatch<any>) => {
    const initObject = {isInitialized: true, isVkAuth: false, posts: [] as vkPostType[], count: 0, error: ''}

    const vkAuth = () => {
        return new Promise<vkSessionType>(resolve => {
            //@ts-ignore
            VK.Auth.login(resolve)
        })
            .then((res) => {
                if (res.status === 'connected') {
                    initObject.isVkAuth = true
                } else {
                    initObject.error = 'You are not authorized in VK'
                    throw new Error('not_authorized')
                    //dispatch(setError('You are not authorized in VK'))
                }
            })
    }
    const vkGetWall = () => {
        return new Promise<vkWallGetResponseType>((resolve) => {
            //@ts-ignore
            VK.Api.call('wall.get', {
                v: 5.131,
                owner_id: -34215577,
                count: count ? count : defaultPageSize
            }, resolve)
        })
            .then((res) => {
                    if (res.hasOwnProperty('response')) {
                        const response = res as successResponseType
                        if (response.response.items.length) {
                            initObject.posts = response.response.items
                            initObject.count = response.response.count
                            console.log('from items')
                            //dispatch(setPosts(response.response.items, response.response.count))
                        }
                    } else if (res.hasOwnProperty('error')) {
                        const response = res as errorResponseType
                        if (response.error.error_msg) {
                            initObject.error = response.error.error_msg
                            //dispatch(setError(response.error.error_msg))
                        }
                    } else {
                        initObject.error = 'unknown error'
                        //dispatch(setError('unknown error'))
                    }
                })
    }

    vkAuth()
        .then(() => {
            vkGetWall()
                .then(() => {
                    batch(() => {
                        dispatch(setVkIsAuth(initObject.isVkAuth))
                        dispatch(setPosts(initObject.posts, initObject.count))
                        dispatch(setError(initObject.error))
                        dispatch(checkMyAuth())
                        dispatch(initializing())
                    })
                })
        })
        .catch((err) => {
            batch(() => {
                dispatch(setVkIsAuth(initObject.isVkAuth))
                dispatch(setPosts(initObject.posts, initObject.count))
                dispatch(setError(initObject.error))
                dispatch(checkMyAuth())
                dispatch(initializing())
            })
        })

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