import {v1} from "uuid";
import {actionsType, dispatchType} from "./redux_store";
import {profileAPI} from "../api/profileAPI";

//constants
const CHANGE_NEW_COMMENT_TEXT = 'CHANGE-NEW-COMMENT-TEXT'
const ADD_COMMENT = 'ADD-COMMENT'
const SET_USER = 'SET-USER'
const CHANGE_LOAD_USER_STATUS = 'CHANGE-LOAD-USER-STATUS'
const CHANGE_MY_STATUS = 'CHANGE_MY_STATUS'

//types
export type fullUserType = {
    aboutMe: string,
    status: string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: null | string | HTMLImageElement,
        large: null | string | HTMLImageElement,
    }
}

//action creators
export const changeNewCommentTextActionCreator = (newComm: string) => {
    return {
        type: CHANGE_NEW_COMMENT_TEXT,
        newComm: newComm
    } as const
}
export const addCommentActionCreator = (text: string) => {
    return {
        type: ADD_COMMENT,
        comment: text
    } as const
}
export const setUser = (user: fullUserType) => {
    return {
        type: SET_USER,
        payload: {
            currentUserData: user,
        }
    } as const
}
export const changeLoadUserStatus = (loadUserStatus: boolean) => {
    return {
        type: CHANGE_LOAD_USER_STATUS,
        payload: {
            loadUserStatus
        }
    } as const
}
export const changeMyStatus = (status: string) => {
    return {
        type: CHANGE_MY_STATUS,
        payload: {
            status
        }
    } as const
}

//thunks
export const getProfile = (userId: number) => {
    return (dispatch: dispatchType) => {
        const setIntervalId = setInterval(() => {
            profileAPI.getProfile(userId)
                .then((data) => {
                    clearInterval(setIntervalId)
                    if (data !== null) {
                        profileAPI.getStatus(userId)
                            .then(statusData => {
                                data.status = statusData ? statusData : ''
                            })
                            .catch(error => {
                                data.status = 'Status was not found'
                                console.log(error.message)
                            })
                            .finally(() => {
                                dispatch(setUser(data))
                            })
                    }
                })
        }, 1000)
        return Number(setIntervalId)
    }
}


//types
export type commentType = {
    id: string
    postId: string
    text: string
    answer: string
}
export type ProfilePageType = {
    currentUserId: null | number,
    currentUserData: fullUserType,
    loadUserStatus: boolean,
    comments: commentType[],
    newComm: string,
}

//actions types
export type addCommentActionType = ReturnType<typeof addCommentActionCreator>
export type changeNewCommentTextActionType = ReturnType<typeof changeNewCommentTextActionCreator>
export type setUserActionType = ReturnType<typeof setUser>
export type changeLoadUserStatusActionType = ReturnType<typeof changeLoadUserStatus>
export type changeMyStatusActionType = ReturnType<typeof changeMyStatus>

//data
const comments: commentType[] = [
    {
        id: v1(),
        postId: v1(),
        text: 'hello',
        answer: v1()
    },
    {
        id: v1(),
        postId: v1(),
        text: 'hello',
        answer: v1()
    },
    {
        id: v1(),
        postId: v1(),
        text: 'hello',
        answer: v1()
    }
]

export const testUser: fullUserType = {
    aboutMe: 'some text',
    status: '',
    contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: 'https://github.com/GlennMiller1991',
        mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'React-developer',
    fullName: 'Alexander',
    userId: -1,
    photos: {
        small: null,
        large: null,
    }
}
const initialState = {
    currentUserId: 1456,
    currentUserData: testUser,
    loadUserStatus: true,
    comments: comments,
    newComm: ''
}

//reducer
export const profileReducer = (state: ProfilePageType = initialState, action: actionsType) => {
    switch (action.type) {
        case CHANGE_NEW_COMMENT_TEXT:
            return {...state, newComm: action.newComm}
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, {
                    text: action.comment,
                    id: v1(),
                    postId: v1()
                }],
                newComm: ''
            }
        case CHANGE_MY_STATUS:
        case CHANGE_LOAD_USER_STATUS:
            return {
                ...state,
                ...action.payload,
            }
        case SET_USER:
            return {
                ...state,
                ...action.payload,
                loadUserStatus: false,
            }
        default:
            return state

    }
}