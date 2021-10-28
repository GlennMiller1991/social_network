import {actionsType} from "./redux_store";

//constants
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_USER_PAGE = 'CHANGE-USER-PAGE'
const CHANGE_PAGE_FIELD_VALUE = 'CHANGE-PAGE-FIELD-VALUE'

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
    users: userType[],
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    pageFieldValue: string
}

//actions type
export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type changeUsersPageActionType = ReturnType<typeof changeUsersPageAC>
export type changePageFieldValueActionType = ReturnType<typeof changePageFieldValueAC>

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
export const setUsersAC = (users: userType[], total: number) => {
    return {
        type: SET_USERS,
        payload: {
            users: users,
            totalUsersCount: total,
        }
    } as const
}
export const changeUsersPageAC = (pageNumber: number) => {
    return {
        type: CHANGE_USER_PAGE,
        payload: {
            currentPage: pageNumber,
        }
    } as const
}
export const changePageFieldValueAC = (value: string) => {
    return {
        type: CHANGE_PAGE_FIELD_VALUE,
        payload: {
            pageFieldValue: value
        }
    } as const
}
//initial state
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 12,
    currentPage: 1,
    pageFieldValue: '1',
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
        case CHANGE_USER_PAGE:
            return {
                ...state,
                ...action.payload,
            }
        case CHANGE_PAGE_FIELD_VALUE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}