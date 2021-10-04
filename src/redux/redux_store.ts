import {combineReducers, createStore} from "redux";
import {postsReducer} from "./postsReducer";
import {shareStoryReducer} from "./shareStoryReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

//action types
export type changeLikesCoundActionType = {
    type: 'CHANGE-LIKES-COUNT'
    value: boolean
    postId: string
}
export type addPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
export type changeShareStoryTextActionType = {
    type: 'CHANGE-SHARE-STORY-TEXT'
    shareStoryText: string
}

export type actionsType = addPostActionType | changeLikesCoundActionType | changeShareStoryTextActionType

const reducers = combineReducers({
    postsPage: postsReducer,
    shareStoryPage: shareStoryReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
})

export const store = createStore(reducers)