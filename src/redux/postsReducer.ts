import {actionsType, postsPageType} from "./state";

const CHANGE_LIKES_COUNT = "CHANGE-LIKES-COUNT";

export const postsReducer = (state: postsPageType, action: actionsType): postsPageType => {
    switch (action.type) {
        case CHANGE_LIKES_COUNT:
            const obj = state.posts.find((post) => post.postId === action.postId)
            if (obj) {
                action.value ? obj.postLikes++ : obj.postLikes--
            }
            return state
        default:
            return state
    }
}