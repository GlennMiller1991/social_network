import {applyMiddleware, combineReducers, createStore, EmptyObject, Store} from "redux";
import {reducer as formReducer} from 'redux-form'
import {
    addPostActionType,
    changeLikesCountActionType,
    filterPostsActionType,
    postsPageType,
    postsReducer, setPostsActionType
} from "./postsReducer";
import {changeShareStoryTextActionType, shareStoryPageType, shareStoryReducer} from "./shareStoryReducer";
import {dialogsPageType, dialogsReducer, filterMessagesActionType} from "./dialogsReducer";
import {sidebarReducer, sideBarType} from "./sidebarReducer";
import {
    addCommentActionType, changeLoadUserStatusActionType, changeMyStatusActionType,
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
import {authReducer, nullDataActionType, setAuthDataActionType} from "./authReducer";
import thunk from "redux-thunk";
import {appReducer, initializingActionType, setErrorActionType} from "./appReducer";

//types
export type dispatchType = typeof store.dispatch
export type stateType = ReturnType<typeof reducers>

export type StoreType = Store<EmptyObject & {
    postsPage: postsPageType;
    profilePage: ProfilePageType;
    shareStoryPage: shareStoryPageType;
    dialogsPage: dialogsPageType;
    sideBar: sideBarType,
    usersPage: usersPageType,
}, actionsType>
export type actionsType = addPostActionType
    | initializingActionType
    | setPostsActionType
    | setErrorActionType
    | nullDataActionType
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
    appState: appReducer,
    form: formReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

// @ts-ignore
window.store = store