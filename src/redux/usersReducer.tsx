import {actionsType} from "./redux_store";

//constants
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

//types
export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    followed: boolean
    status: null
    photos: {
        large: null | HTMLImageElement
        small: null
    }
}
export type usersPageType = {
    users: userType[]
}

//actions type
export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

//actions creators
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId: userId
        }
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId: userId
        }
    } as const
}
export const setUsersAC = (users: userType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}

//initial state
const initialState = {
    users: []
}

export const usersReducer = (state: usersPageType = initialState, action: actionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                            return (
                                user.id === action.payload.userId ?
                                    {...user, followed: true} :
                                    user
                            )
                        }
                    )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                        return (
                            user.id === action.payload.userId ?
                                {...user, followed: false} :
                                user
                        )
                    }
                )
            }
        case SET_USERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}