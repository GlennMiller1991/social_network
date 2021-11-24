//data
import {v1} from "uuid";
import {
    addCommentActionCreator, changeLoadUserStatus,
    changeNewCommentTextActionCreator,
    commentType, ProfilePageType,
    profileReducer, setUser, testUser
} from "./profileReducer";

let initialState: ProfilePageType
let comments: commentType[]
beforeEach(() => {
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
        },
    ]
    initialState = {
        currentUserId: 1456,
        currentUserData: testUser,
        loadUserStatus: false,
        comments: comments,
        newComm: ''
    }
})

test('add comment must be correct', () => {
    let objToTest = profileReducer(initialState,
        addCommentActionCreator('hello'))
    expect(objToTest.comments.length).toBe(4)
    expect(objToTest.comments[3].text).toBe('hello')
})

test('change comment text must be correct', () => {
    let objToTest = profileReducer(initialState,
        changeNewCommentTextActionCreator('hello'))
    expect(objToTest.comments.length).toBe(3)
    expect(objToTest.newComm).toBe('hello')
})

test('adding user', () => {
    let newState = profileReducer(initialState, setUser(testUser))
    expect(newState.currentUserData.userId).toBe(-1)
    expect(newState.currentUserData.fullName).toBe('Alexander')
    expect(newState.currentUserData.contacts.facebook).toBeNull()
})

test('change user load status', () => {
    let newState = profileReducer(initialState, changeLoadUserStatus(true))
    expect(newState.currentUserData.userId).toBe(-1)
    expect(newState.currentUserData.fullName).toBe('Alexander')
    expect(newState.currentUserData.contacts.facebook).toBeNull()
    expect(newState.loadUserStatus).toBe(true)

    newState = profileReducer(initialState, changeLoadUserStatus(false))
    expect(newState.currentUserData.userId).toBe(-1)
    expect(newState.currentUserData.fullName).toBe('Alexander')
    expect(newState.currentUserData.contacts.facebook).toBeNull()
    expect(newState.loadUserStatus).toBe(false)
})