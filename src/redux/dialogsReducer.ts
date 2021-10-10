import {v1} from "uuid";
import {actionsType} from "./redux_store";

//types
export type ChatType = {
    id: string
    author: 'you' | 'notYou'
    message: string
}
export type OpenDialogType = {
    id: string
    name: string
}
export type dialogsPageType = {
    chat: Array<ChatType>
    dialogs: Array<OpenDialogType>
}

//action creators



const initialState: dialogsPageType = {
    chat: [
        {
            id: v1(),
            author: 'notYou',
            message: 'How are you'
        },
        {
            id: v1(),
            author: 'you',
            message: 'How are you'
        },
        {
            id: v1(),
            author: 'notYou',
            message: 'How are you'
        },

    ],
    dialogs: [
        {name: 'Katya', id: v1()},
        {name: 'Dasha', id: v1()},
        {name: 'Anna', id: v1()},
        {name: 'Viktor', id: v1()},
        {name: 'Andrey', id: v1()},
    ],
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: actionsType): dialogsPageType => {
    switch (action.type) {
        default:
            return state
    }
}