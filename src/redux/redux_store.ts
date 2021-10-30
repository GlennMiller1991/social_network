import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {
    addPostActionType,
    changeLikesCountActionType,
    filterPostsActionType,
    postsPageType,
    postsReducer
} from "./postsReducer";
import {changeShareStoryTextActionType, shareStoryPageType, shareStoryReducer} from "./shareStoryReducer";
import {dialogsPageType, dialogsReducer, filterMessagesActionType} from "./dialogsReducer";
import {sidebarReducer, sideBarType} from "./sidebarReducer";
import {
    addCommentActionType,
    changeNewCommentTextActionType,
    ProfilePageType,
    profileReducer
} from "./profileReducer";
import {
    changePageFieldValueActionType,
    changeUsersPageActionType, enterPressActionType,
    followActionType,
    setUsersActionType,
    unfollowActionType,
    usersPageType,
    usersReducer
} from "./usersReducer";

//types
export type stateType = {
    postsPage: postsPageType
    dialogsPage: dialogsPageType
    shareStoryPage: shareStoryPageType
    sideBar: sideBarType
    profilePage: ProfilePageType
    usersPage: usersPageType,
}
export type StoreType = Store<EmptyObject & {
    postsPage: postsPageType;
    profilePage: ProfilePageType;
    shareStoryPage: shareStoryPageType;
    dialogsPage: dialogsPageType;
    sideBar: sideBarType,
    usersPage: usersPageType,
}, actionsType>
export type actionsType = addPostActionType
    | changeLikesCountActionType
    | changeShareStoryTextActionType
    | changeNewCommentTextActionType
    | addCommentActionType
    | filterPostsActionType
    | filterMessagesActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | changeUsersPageActionType
    | changePageFieldValueActionType
    | enterPressActionType

const reducers = combineReducers({
    postsPage: postsReducer,
    profilePage: profileReducer,
    shareStoryPage: shareStoryReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
})

export const store = createStore(reducers)

// @ts-ignore
window.store = store