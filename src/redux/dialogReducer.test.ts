import {v1} from "uuid";
import {dialogsPageType, dialogsReducer, filterMessagesActionCreator} from "./dialogsReducer";

const initialState: dialogsPageType = {
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

test('filter function of messages must be correct', () => {
    let objToTest = dialogsReducer(initialState, filterMessagesActionCreator('all'))
    expect(objToTest.chat.length).toBe(3)
    expect(objToTest.filter).toBe('all')
    expect(objToTest.chat[1].message).toBe('second')

    objToTest = dialogsReducer(initialState, filterMessagesActionCreator('you'))
    expect(objToTest.chat.length).toBe(1)
    expect(objToTest.filter).toBe('you')
    expect(objToTest.chat[0].message).toBe('second')

    objToTest = dialogsReducer(initialState, filterMessagesActionCreator('notYou'))
    expect(objToTest.chat.length).toBe(2)
    expect(objToTest.filter).toBe('notYou')
    expect(objToTest.chat[1].message).toBe('third')

})