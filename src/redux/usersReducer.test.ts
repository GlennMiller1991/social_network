import {
    changeLoadStatus,
    changePageFieldValue, changeSubBtn,
    changeUsersPage,
    follow,
    setUsers,
    unfollow,
    usersPageType,
    usersReducer
} from "./usersReducer";

let testUser = {
    name: 'Alexandr',
    id: 1,
    uniqueUrlName: null,
    followed: false,
    status: null,
    photos: {
        large: null,
        small: null,
    },
    waitForChangingStatus: false,
}
let initialState: usersPageType;
beforeEach(() => {
    initialState = {
        users: [
            testUser,
            {...testUser, id: 2, name: 'A'},
            {...testUser, id: 3, name: 'Al'},
            {...testUser, id: 4, name: 'Ale'},
            {...testUser, id: 5, name: 'Alex'},
            {...testUser, id: 6, name: 'Alexa'},
        ],
        totalUsersCount: 0,
        pageSize: 12,
        currentPage: 1,
        pageFieldValue: '1',
        usersIsLoaded: true,
    }
})

test('follow/unfollow testing', () => {
    let newState = usersReducer(initialState, follow(1))
    expect(initialState.users.length).toBe(6)
    expect(newState.users[0].followed).toBe(true)

    newState = usersReducer(initialState, unfollow(1))
    expect(initialState.users.length).toBe(6)
    expect(newState.users[0].followed).toBe(false)
})

test('setting users', () => {
    initialState = {...initialState, users: []}
    let newState = usersReducer(initialState,
        setUsers(
            [
                testUser,
                {...testUser, id: 2, name: 'A'},
                {...testUser, id: 3, name: 'Al'},
                {...testUser, id: 4, name: 'Ale'},
                {...testUser, id: 5, name: 'Alex'},
                {...testUser, id: 6, name: 'Alexa'},
            ], 1400
        ))
    expect(initialState.users.length).toBe(0)
    expect(newState.users[0].id).toBe(1)
    expect(newState.users[0].name).toBe('Alexandr')
    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[0].waitForChangingStatus).toBe(false)
    expect(newState.usersIsLoaded).toBe(false)
    expect(newState.totalUsersCount).toBe(1400)
})

test('changing page of users', () => {
    let newState = usersReducer(initialState, changeUsersPage(2))

    expect(initialState.users.length).toBe(6)
    expect(initialState.currentPage).toBe(1)
    expect(initialState.pageFieldValue).toBe('1')

    expect(newState.users.length).toBe(6)
    expect(newState.currentPage).toBe(2)
    expect(newState.pageFieldValue).toBe('2')

})

test('changing page field value', () => {
    let newState = usersReducer(initialState, changePageFieldValue('2'))
    expect(initialState.users.length).toBe(6)
    expect(initialState.currentPage).toBe(1)
    expect(initialState.pageFieldValue).toBe('1')

    expect(newState.users.length).toBe(6)
    expect(newState.currentPage).toBe(1)
    expect(newState.pageFieldValue).toBe('2')
})

test('changing load status', () => {
    let newState = usersReducer(initialState, changeLoadStatus(false))
    expect(initialState.users.length).toBe(6)
    expect(initialState.currentPage).toBe(1)
    expect(initialState.pageFieldValue).toBe('1')
    expect(initialState.usersIsLoaded).toBe(true)

    expect(newState.users.length).toBe(6)
    expect(newState.currentPage).toBe(1)
    expect(newState.pageFieldValue).toBe('1')
    expect(newState.usersIsLoaded).toBe(false)
    newState = usersReducer(initialState, changeLoadStatus(true))
    expect(newState.usersIsLoaded).toBe(true)

})

test('change subscribe btn status while load', () => {
    let newState = usersReducer(initialState, changeSubBtn(1, true))
    expect(initialState.users.length).toBe(6)
    expect(initialState.currentPage).toBe(1)
    expect(initialState.pageFieldValue).toBe('1')
    expect(initialState.users[0].waitForChangingStatus).toBe(false)

    expect(newState.users.length).toBe(6)
    expect(newState.currentPage).toBe(1)
    expect(newState.pageFieldValue).toBe('1')
    expect(newState.users[0].waitForChangingStatus).toBe(true)
    newState = usersReducer(initialState, changeSubBtn(1, false))

    expect(newState.users[0].waitForChangingStatus).toBe(false)
})

