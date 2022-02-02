import {actionsType, dispatchType} from "./redux_store";
import {errorResponseType, successResponseType, vkWallGetResponseType} from "../api/vkAPI";
import {defaultPageSize, setError} from "./appReducer";

//constants
const ADD_POST = "ADD-POST"
const CHANGE_PAGE_SIZE = 'CHANGE_PAGE_SIZE'
const SET_POSTS = 'SET_POSTS'
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE'
const CHANGE_POSTS_PAGE = 'CHANGE_POSTS_PAGE'

//actions types
export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type filterPostsActionType = ReturnType<typeof changePageSizeActionCreator>
export type setPostsActionType = ReturnType<typeof setPosts>
export type changeFieldValueActionType = ReturnType<typeof changeFieldValue>
export type changePostsPageActionType = ReturnType<typeof changePostsPage>
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
export type pageSizeType = 3 | 10 | 20

export type postsPageType = {
    posts: Array<vkPostType>
    pageSize: pageSizeType,
    count: number,
    currentPage: number,
    field: string,
}

export const changeFieldValue = (field: string) => {
    return {
        type: CHANGE_FIELD_VALUE,
        payload: {
            field
        }
    } as const
}
export const addPostActionCreator = (value: string) => {
    return {type: ADD_POST, postMessage: value} as const
}
export const changePageSizeActionCreator = (pageSize: pageSizeType) => {
    return {
        type: CHANGE_PAGE_SIZE,
        payload: {
            pageSize,
        }
    } as const
}
export const setPosts = (posts: vkPostType[], count: number) => {
    return {
        type: SET_POSTS,
        payload: {
            posts,
            count,
        }
    } as const
}
export const changePostsPage = (pageNumber: number) => {
    return {
        type: CHANGE_POSTS_PAGE,
        payload: {
            currentPage: pageNumber,
            field: String(pageNumber),
        }
    } as const
}
export const renewPosts = (requiredPage: number, pageSize: number, count?: number) => {
    return (dispatch: dispatchType) => {
        dispatch(changePostsPage(requiredPage))
        //@ts-ignore
        VK.Api.call('wall.get',
            {v: 5.131, owner_id: -34215577, count: count? count: defaultPageSize, offset: (requiredPage - 1) * pageSize},
            (res: vkWallGetResponseType) => {
                if (res.hasOwnProperty('response')) {
                    const response = res as successResponseType
                    if (response.response.items.length) {
                        dispatch(setPosts(response.response.items, response.response.count))
                    }
                } else if (res.hasOwnProperty('error')) {
                    const response = res as errorResponseType
                    if (response.error.error_msg) {
                        dispatch(setError(response.error.error_msg))
                    }
                } else {
                    dispatch(setError('unknown error'))
                }
            }
        )
    }
}

const initialState: postsPageType = {
    posts: [],
    pageSize: defaultPageSize,
    count: 0,
    currentPage: 1,
    field: '1',
}

export const postsReducer = (state: postsPageType = initialState, action: actionsType): postsPageType => {
    switch (action.type) {
        case SET_POSTS:
        case CHANGE_POSTS_PAGE:
        case CHANGE_PAGE_SIZE:
        case CHANGE_FIELD_VALUE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}