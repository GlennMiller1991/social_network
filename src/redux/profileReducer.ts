import {v1} from "uuid";
import {actionsType} from "./redux_store";

//constants
const CHANGE_NEW_COMMENT_TEXT = 'CHANGE-NEW-COMMENT-TEXT'
const ADD_COMMENT = 'ADD-COMMENT'

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

//types
export type commentType = {
    id: string
    postId: string
    text: string
    answer: string
}
export type ProfilePageType = {
    comments: commentType[]
    newComm: string
}

//actions types
export type addCommentActionType = ReturnType<typeof addCommentActionCreator>
export type changeNewCommentTextActionType = ReturnType<typeof changeNewCommentTextActionCreator>

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
const initialState = {
    comments: comments,
    newComm: ''
}

//reducer
export const profileReducer = (state:ProfilePageType = initialState, action: actionsType) => {
    switch (action.type) {
        case CHANGE_NEW_COMMENT_TEXT:
            return {...state, newComm: action.newComm}
        case ADD_COMMENT:
            return {
                ...state, comments: [...state.comments, {
                    text: action.comment,
                    id: v1(),
                    postId: v1()
                }]
            }
        default:
            return state

    }
}