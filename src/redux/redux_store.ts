import {applyMiddleware, combineReducers, createStore, EmptyObject, Store} from "redux";
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
    addCommentActionType, changeLoadUserStatus, changeLoadUserStatusActionType, changeMyStatusActionType,
    changeNewCommentTextActionType,
    ProfilePageType,
    profileReducer, setUserActionType
} from "./profileReducer";
import {
    changeLoadStatusActionType,
    changePageFieldValueActionType, changeSubBtnActionType,
    changeUsersPageActionType,
    followActionType,
    setUsersActionType,
    unfollowActionType,
    usersPageType,
    usersReducer
} from "./usersReducer";
import {authReducer, authType, setAuthDataActionType} from "./authReducer";
import thunk from "redux-thunk";

//types
export type dispatchType = typeof store.dispatch
export type stateType = {
    postsPage: postsPageType
    dialogsPage: dialogsPageType
    shareStoryPage: shareStoryPageType
    sideBar: sideBarType
    profilePage: ProfilePageType
    usersPage: usersPageType,
    authState: authType,
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
    | changeLoadStatusActionType
    | setUserActionType
    | changeLoadUserStatusActionType
    | setAuthDataActionType
    | changeSubBtnActionType
    | changeMyStatusActionType

const reducers = combineReducers({
    postsPage: postsReducer,
    profilePage: profileReducer,
    shareStoryPage: shareStoryReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authState: authReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

// @ts-ignore
window.store = store