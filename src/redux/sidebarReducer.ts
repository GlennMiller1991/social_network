import {actionsType, sideBarType} from "./store";
import {v1} from "uuid";

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
export const sidebarReducer = (state: sideBarType = initialState, action: actionsType): sideBarType  => {
    return state
}