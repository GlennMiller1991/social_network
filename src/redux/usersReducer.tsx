import {actionsType, stateType} from "./redux_store";

//constants
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

//types
export type userType = {
    id: string,
    name: string,
    location: string,
    status: string,
    photoUrl: string,
    isFollowed: boolean
}
export type usersPageType = {
    users: userType[]
}

//actions type
export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

//actions creators
export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId: userId
        }
    } as const
}
export const unfollowAC = (userId: string) => {
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
                                    {...user, isFollowed: true} :
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
                                {...user, isFollowed: false} :
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