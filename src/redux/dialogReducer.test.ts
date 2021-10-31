import {v1} from "uuid";
import {dialogsPageType, dialogsReducer, filterMessages} from "./dialogsReducer";

let initialState: dialogsPageType;
beforeEach(() => {
    initialState = {
        chat: [
            {
                id: v1(),
                author: 'notYou',
                message: 'first'
            },
            {
                id: v1(),
                author: 'you',
                message: 'second'
            },
            {
                id: v1(),
                author: 'notYou',
                message: 'third'
            },

        ],
        dialogs: [
            {name: 'Katya', id: v1()},
            {name: 'Dasha', id: v1()},
            {name: 'Anna', id: v1()},
            {name: 'Viktor', id: v1()},
            {name: 'Andrey', id: v1()},
        ],
        filter: 'all'
    }
})

test('filter function of messages must be correct', () => {
    let objToTest = dialogsReducer(initialState, filterMessages('all'))
    expect(objToTest.chat.length).toBe(3)
    expect(objToTest.filter).toBe('all')
    expect(objToTest.chat[1].message).toBe('second')

    objToTest = dialogsReducer(initialState, filterMessages('you'))
    expect(objToTest.chat.length).toBe(3)
    expect(objToTest.filter).toBe('you')
    expect(objToTest.chat[1].message).toBe('second')

    objToTest = dialogsReducer(initialState, filterMessages('notYou'))
    expect(objToTest.chat.length).toBe(3)
    expect(objToTest.filter).toBe('notYou')
    expect(objToTest.chat[1].message).toBe('second')

})