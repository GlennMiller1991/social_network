import {actionsType, dispatchType} from "./redux_store";
import {usersAPI} from "../api/usersAPI";
import {followAPI} from "../api/followAPI";

//constants
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_USER_PAGE = 'CHANGE-USER-PAGE'
const CHANGE_PAGE_FIELD_VALUE = 'CHANGE-PAGE-FIELD-VALUE'
const CHANGE_LOAD_STATUS = 'CHANGE-LOAD-STATUS'
const CHANGE_SUB_BTN = 'CHANGE-SUB-BTN'

//types
export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    followed: boolean
    status: null
    photos: {
        large: null | string | HTMLImageElement
        small: null | string | HTMLImageElement
    },
    waitForChangingStatus: boolean,
}
export type usersPageType = {
    users: userType[],
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    usersIsLoaded: boolean,
}

//actions type
export type followActionType = ReturnType<typeof follow>
export type unfollowActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type changeUsersPageActionType = ReturnType<typeof changeUsersPage>
export type changePageFieldValueActionType = ReturnType<typeof changePageFieldValue>
export type changeLoadStatusActionType = ReturnType<typeof changeLoadStatus>
export type changeSubBtnActionType = ReturnType<typeof changeSubBtn>

//actions creators
export const changeSubBtn = (userId: number, value: boolean) => {
    return {
        type: CHANGE_SUB_BTN,
        payload: {
            userId,
            value,
        }
    } as const
}
export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId: userId
        }
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId: userId
        }
    } as const
}
export const setUsers = (users: userType[], total: number) => {
    return {
        type: SET_USERS,
        payload: {
            users: users,
            totalUsersCount: total,
        }
    } as const
}
export const changeUsersPage = (pageNumber: number) => {
    return {
        type: CHANGE_USER_PAGE,
        payload: {
            currentPage: pageNumber,
            pageFieldValue: pageNumber,
        }
    } as const
}
export const changePageFieldValue = (value: string) => {
    return {
        type: CHANGE_PAGE_FIELD_VALUE,
        payload: {
            pageFieldValue: value
        }
    } as const
}
export const changeLoadStatus = (usersIsLoaded: boolean) => {
    return {
        type: CHANGE_LOAD_STATUS,
        payload: {
            usersIsLoaded
        }
    } as const
}

//thunk and thunk creators
export const getUsers = (pageSize: number, currentPage: number) => {
    return (dispatch: dispatchType) => {
        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(setUsers(data.items.map(item => {
                        return {...item, waitForChangingStatus: false}
                    }), data.totalCount)
                )
            })
    }
}
export const renewUsers = (requiredPage: number, pageSize: number) => {
    return (dispatch: dispatchType) => {
        dispatch(changeUsersPage(requiredPage))
        usersAPI.getUsers(pageSize, requiredPage)
            .then(data => {
                dispatch(setUsers(data.items, data.totalCount))
            })
            .catch(() => {
                dispatch(changeLoadStatus(true))
            })
    }
}
export const followUser = (userId: number) => {
    return (dispatch: dispatchType) => {
        dispatch(changeSubBtn(userId, true))
        followAPI.follow(userId)
            .then(() => {
                dispatch(follow(userId))
            })
            .finally(() => {
                dispatch(changeSubBtn(userId, false))
            })
    }
}
export const unfollowUser = (userId: number) => {
    return (dispatch: dispatchType) => {
        dispatch(changeSubBtn(userId, true))
        followAPI.unfollow(userId)
            .then(() => {
                dispatch(unfollow(userId))
            })
            .finally(() => {
                dispatch(changeSubBtn(userId, false))
            })
    }
}

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 12,
    currentPage: 1,
    pageFieldValue: '1',
    usersIsLoaded: true,
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
                ),
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
                ...action.payload,
                usersIsLoaded: false,
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
        case CHANGE_LOAD_STATUS:
            return {
                ...state,
                ...action.payload
            }
        case CHANGE_SUB_BTN:
            return {
                ...state,
                users: state.users.map(
                    user =>
                        user.id === action.payload.userId ?
                            {...user, waitForChangingStatus: action.payload.value} :
                            user
                )
            }
        default:
            return state
    }
}
