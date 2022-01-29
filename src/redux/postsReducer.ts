import {actionsType} from "./redux_store";

//constants
const CHANGE_LIKES_COUNT = "CHANGE-LIKES-COUNT";
const ADD_POST = "ADD-POST"
const FILTER = 'FILTER'
const SET_POSTS = 'SET_POSTS'

//actions types
export type changeLikesCountActionType = ReturnType<typeof changeLikesCountActionCreator>
export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type filterPostsActionType = ReturnType<typeof filterPostsActionCreator>
export type setPostsActionType = ReturnType<typeof setPosts>

//types
export type PostType = {
    postText: string
    postPhoto: string
    postDate: string
    postLikes: number
    postId: string
}
export type vkPostType = {
    attachments: any, //need!!
    comments: {
        count: number,
        donut: {
            placeholder: {
                text: string,
            }
        }
    },
    date: number,
    donut: {
        is_donut: boolean,
    },
    from_id: number,
    hash: string,
    id: number,
    is_favorite: boolean,
    likes: {
        can_like: number,
        count: number,
        user_likes: number,
    },
    marked_as_ads: number,
    owner_id: number,
    post_type: string,
    reposts: {
        count: number,
    },
    short_text_rate: number,
    text: string,
    views: {
        count: number,
    },
}
export type postsPageType = {
    posts: Array<vkPostType>
    filter: string
}

//action creators
export const changeLikesCountActionCreator = (change: boolean, postId: string) => {
    return {type: CHANGE_LIKES_COUNT, postId: postId, value: change} as const
}
export const addPostActionCreator = (value: string) => {
    return {type: ADD_POST, postMessage: value} as const
}
export const filterPostsActionCreator = (filterValue: string) => {
    return {
        type: FILTER,
        payload: {
            filter: filterValue
        }
    } as const
}
export const setPosts = (posts: vkPostType[]) => {
    return {
        type: SET_POSTS,
        payload: {
            posts,
        }
    } as const
}

const initialState: postsPageType = {
    posts: [],
    filter: 'date'
}

export const postsReducer = (state: postsPageType = initialState, action: actionsType): postsPageType => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                ...action.payload,
            }
        // case CHANGE_LIKES_COUNT:
        //     const mapPosts = (post: PostType) => {
        //         return post.postId === action.postId ?
        //             (action.value ?
        //                 {...post, postLikes: post.postLikes + 1} :
        //                 {...post, postLikes: post.postLikes - 1}) :
        //             post
        //     }
        //     return {...state, posts: state.posts.map(mapPosts)}
        // case ADD_POST:
        //     return action.postMessage.trim() ? {
        //         ...state, posts: [...state.posts, {
        //             postText: action.postMessage.trim(),
        //             postPhoto: 'https://vk.com',
        //             postDate: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}}`,
        //             postLikes: 0,
        //             postId: v1()
        //         }]
        //     } : state
        case FILTER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}