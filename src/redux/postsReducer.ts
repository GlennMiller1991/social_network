import {actionsType, addPostActionType, changeLikesCoundActionType, postsPageType} from "./store";
import {v1} from "uuid";
import {PostType} from "../components/Content/Posts/Post/Post";

const CHANGE_LIKES_COUNT = "CHANGE-LIKES-COUNT";
const ADD_POST = "ADD-POST"

export const changeLikesCountActionCreator = (change: boolean, postId: string): changeLikesCoundActionType => {
    return {type: "CHANGE-LIKES-COUNT", postId: postId, value: change}
}
export const addPostActionCreator = (value: string): addPostActionType => {
    return {type: 'ADD-POST', postMessage: value}
}

const initialState = {
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
        }]
}

export const postsReducer = (state: postsPageType = initialState, action: actionsType): postsPageType => {
    switch (action.type) {
        case CHANGE_LIKES_COUNT:
            const obj = state.posts.find((post) => post.postId === action.postId)
            if (obj) {
                action.value ? obj.postLikes++ : obj.postLikes--
            }
            return state
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