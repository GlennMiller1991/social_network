import {actionsType, dialogsPageType} from "./store";
import {v1} from "uuid";

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
    return state
}