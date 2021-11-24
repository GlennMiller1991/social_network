import {authReducer, authType, setAuthData} from './authReducer'

let initialState: authType
beforeEach(() => {
    initialState = {
        id: null,
        login: null,
        email: null,
        isAuth: false
    }
})

test('auth should be valid', () => {
    let newState = authReducer(initialState, setAuthData(1, 'Racoonister', 'example@mail.ru'))

    expect(newState.isAuth).toBe(true)
    expect(newState.id).toBe(1)
    expect(newState.login).toBe('Racoonister')
    expect(newState.email).toBe('example@mail.ru')

    newState = authReducer(initialState, setAuthData(2, 'Racoonister1', 'example2@mail.ru'))
    expect(newState.isAuth).toBe(true)
    expect(newState.id).toBe(2)
    expect(newState.login).toBe('Racoonister1')
    expect(newState.email).toBe('example2@mail.ru')
})