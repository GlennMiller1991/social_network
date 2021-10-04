import {actionsType, postsPageType} from "./state";
import {PostType} from "../components/Content/Posts/Post/Post";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"

export const shareStoryReducer = (state: postsPageType, action: actionsType): postsPageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                postText: action.postMessage,
                postPhoto: 'https://helo',
                postDate: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}}`,
                postLikes: 0,
                postId: v1()
            }
            state.posts.push(newPost)
            return state
        default:
            return state
    }
}