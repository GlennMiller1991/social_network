import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {
    addPostActionType,
    changeLikesCountActionType,
    filterPostsActionType,
    postsPageType,
    postsReducer
} from "./postsReducer";
import {changeShareStoryTextActionType, shareStoryPageType, shareStoryReducer} from "./shareStoryReducer";
import {dialogsPageType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer, sideBarType} from "./sidebarReducer";
import {
    addCommentActionType,
    changeNewCommentTextActionType,
    ProfilePageType,
    profileReducer
} from "./profileReducer";

//types
export type stateType = {
    postsPage: postsPageType
    dialogsPage: dialogsPageType
    shareStoryPage: shareStoryPageType
    sideBar: sideBarType
    profilePage: ProfilePageType
}
export type StoreType = Store<EmptyObject & {
    postsPage: postsPageType;
    profilePage: ProfilePageType;
    shareStoryPage: shareStoryPageType;
    dialogsPage: dialogsPageType;
    sideBar: sideBarType
}, actionsType>
export type actionsType = addPostActionType | changeLikesCountActionType |
    changeShareStoryTextActionType | changeNewCommentTextActionType |
    addCommentActionType | filterPostsActionType

const reducers = combineReducers({
    postsPage: postsReducer,
    profilePage: profileReducer,
    shareStoryPage: shareStoryReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
})

export const store = createStore(reducers)