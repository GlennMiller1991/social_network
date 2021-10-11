//data
import {v1} from "uuid";
import {
    addCommentActionCreator,
    changeNewCommentTextActionCreator,
    commentType,
    profileReducer
} from "./profileReducer";

let comments: commentType[] = [
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
let initialState = {
    comments: comments,
    newComm: ''
}

test('add comment must be correct', () => {
    comments = [
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
    initialState = {
        comments: comments,
        newComm: ''
    }
    let objToTest = profileReducer(initialState,
        addCommentActionCreator('hello'))
    expect(objToTest.comments.length).toBe(4)
    expect(objToTest.comments[3].text).toBe('hello')
})

test('change comment text must be correct', () => {
    comments = [
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
    initialState = {
        comments: comments,
        newComm: ''
    }
    let objToTest = profileReducer(initialState,
        changeNewCommentTextActionCreator('hello'))
    expect(objToTest.comments.length).toBe(3)
    expect(objToTest.newComm).toBe('hello')
})