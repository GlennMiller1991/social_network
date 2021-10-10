import {v1} from "uuid";
import {actionsType} from "./redux_store";


//types
export type bestPostType = {
    text: string
    id: string
}
export type tagType = {
    name: string
    priority: number
}
export type sideBarType = {
    tags: Array<tagType>
    bestPosts: Array<bestPostType>
}

//data
const initialState = {
    tags: [
        {
            name: 'Family',
            priority: 9,
        },
        {
            name: 'Strange',
            priority: 16,
        },
        {
            name: 'Love',
            priority: 14,
        },
        {
            name: 'Pizdec',
            priority: 20,
        },
        {
            name: 'Scary',
            priority: 13,
        },
        {
            name: 'Childhood',
            priority: 12,
        },
        {
            name: 'Work',
            priority: 22,
        },
    ],
    bestPosts: [
        {text: 'Best post', id: v1()},
        {text: 'Best post', id: v1()},
        {text: 'Best post', id: v1()},
        {text: 'Best post', id: v1()},
        {text: 'Best post', id: v1()},
        {text: 'Best post', id: v1()},
    ],
}

//reducer
export const sidebarReducer = (state: sideBarType = initialState, action: actionsType): sideBarType  => {
    switch (action.type) {
        default:
            return state
    }
}