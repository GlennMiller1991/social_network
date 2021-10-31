import {v1} from "uuid";
import {actionsType} from "./redux_store";

//constants
const CHANGE_LIKES_COUNT = "CHANGE-LIKES-COUNT";
const ADD_POST = "ADD-POST"
const FILTER = 'FILTER'

//actions types
export type changeLikesCountActionType = ReturnType<typeof changeLikesCountActionCreator>
export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type filterPostsActionType = ReturnType<typeof filterPostsActionCreator>

//types
export type PostType = {
    postText: string
    postPhoto: string
    postDate: string
    postLikes: number
    postId: string
}
export type postsPageType = {
    posts: Array<PostType>
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

const initialState: postsPageType = {
    posts: [
        {
            postText: 'Is there anybody going to listen to my story' +
                '? All about girl who came to stay. She is a kind of girl you' +
                'want so much, it makes you sorry, still you don\'t regret a single day',
            postPhoto: 'https://www.culturesonar.com/wp-content/uploads/2017/08/beatles-with-a-girl-getty-600x400.jpg',
            postDate: '07.23.2021',
            postLikes: -1,
            postId: v1(),
        },
        {
            postText: 'Когда в нашем городе только зарождался первый частный' +
                ' приют для животных, я пошла туда волонтёром. Была хорошо знакома' +
                ' с организаторами этого дела, видела, как они стараются ради' +
                ' хвостатых. Тогда они ещё ездили на скромных машинах и работали' +
                ' на основной работе.\n' +
                'Прошло уже почти десять лет. У тех барышень свои частные коттеджи' +
                ' в элитном районе города, дорогие машины и прочие блага. ' +
                'И всё это притом, что они уже лет пять не работают нигде, кроме' +
                ' как безвозмездно руководят приютом. Хм.',
            postPhoto: 'https://www.culturesonar.com/wp-content/uploads/2017/08/beatles-with-a-girl-getty-600x400.jpg',
            postDate: '06.23.2021',
            postLikes: 2,
            postId: v1()
        },
        {
            postText: 'Хм.',
            postPhoto: 'https://www.culturesonar.com/wp-content/uploads/2017/08/beatles-with-a-girl-getty-600x400.jpg',
            postDate: '08.23.2021',
            postLikes: 1,
            postId: v1()
        }],
    filter: 'date'
}

export const postsReducer = (state: postsPageType = initialState, action: actionsType): postsPageType => {
    switch (action.type) {
        case CHANGE_LIKES_COUNT:
            const mapPosts = (post: PostType) => {
                return post.postId === action.postId ?
                    (action.value ?
                        {...post, postLikes: post.postLikes + 1} :
                        {...post, postLikes: post.postLikes - 1}) :
                    post
            }
            return {...state, posts: state.posts.map(mapPosts)}
        case ADD_POST:
            return action.postMessage.trim() ? {
                ...state, posts: [...state.posts, {
                    postText: action.postMessage.trim(),
                    postPhoto: 'https://vk.com',
                    postDate: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}}`,
                    postLikes: 0,
                    postId: v1()
                }]
            } : state
        case FILTER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}