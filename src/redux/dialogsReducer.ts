import {v1} from "uuid";
import {actionsType} from "./redux_store";

//constants
export const FILTER_MESSAGES = 'FILTER-MESSAGES'

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
    filter: string
}

//actions types
export type filterMessagesActionType = ReturnType<typeof filterMessagesActionCreator>

//action creators
export const filterMessagesActionCreator = (value: string) => {
    return {
        type: FILTER_MESSAGES,
        filterValue: value
    } as const
}

export const initialState: dialogsPageType = {
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
    filter: 'all'
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: actionsType): dialogsPageType => {
    switch (action.type) {
        case FILTER_MESSAGES:
            switch (action.filterValue) {
                case 'all':
                    return state
                case 'you':
                    return {
                        ...state,
                        chat: state.chat.filter(mes => mes.author === action.filterValue),
                        filter: action.filterValue
                    }
                case 'notYou':
                    return {
                        ...state,
                        chat: state.chat.filter(mes => mes.author === action.filterValue),
                        filter: action.filterValue
                    }
                default:
                    return state
            }
        default:
            return state
    }
}