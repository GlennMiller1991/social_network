import {actionsType} from "./redux_store";

//constants
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_USER_PAGE = 'CHANGE-USER-PAGE'
const CHANGE_PAGE_FIELD_VALUE = 'CHANGE-PAGE-FIELD-VALUE'
const ENTER_PRESS = 'ENTER-PRESS'
const CHANGE_LOAD_STATUS = 'CHANGE-LOAD-STATUS'

//types
export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    followed: boolean
    status: null
    photos: {
        large: null | string | HTMLImageElement
        small: null
    }
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
export type enterPressActionType = ReturnType<typeof enterPress>
export type changeLoadStatusActionType = ReturnType<typeof changeLoadStatus>

//actions creators
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
export const enterPress = (value: string) => {
    return {
        type: ENTER_PRESS,
        payload: {
            currentPage: Number(value),
            pageFieldValue: value,
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
//initial state
export const fakeState = {
    users: [
        {
            id: 1,
            name: 'AlexisTheGreat',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 2,
            name: 'Alex',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 3,
            name: 'AlexisTheGreat',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 4,
            name: 'Alex',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 5,
            name: 'AlexisTheGreat',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 6,
            name: 'Alex',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 7,
            name: 'Katya',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 8,
            name: 'DedMaximusYoYOY',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 9,
            name: 'Gerda',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 10,
            name: 'Harold from Rivia',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 11,
            name: 'AsterixusJunior',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
        {
            id: 12,
            name: 'Usmanov Sergey Victorovich',
            status: null,
            followed: false,
            photos: {
                large: null,
                small: null,
            },
            uniqueUrlName: null,
        },
    ],
    totalUsersCount: 6,
    pageSize: 12,
    currentPage: 1,
    pageFieldValue: '1',
    usersIsLoaded: true,
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
        case ENTER_PRESS:
            return {
                ...state,
                ...action.payload,
            }
        case CHANGE_LOAD_STATUS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}