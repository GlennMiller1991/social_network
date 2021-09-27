import {PostType} from "../components/Content/Posts/Post/Post";
import {ChatType} from "../components/Content/Dialogs/Chat/Chat";
import {v1} from "uuid";
import {OpenDialogPropsType} from "../components/Content/Dialogs/OpenDialog/OpenDialog";

//types
export type bestPostType = {
    text: string
    id: string
}
export type tagType = {
    name: string
    priority: number
}
export type sideBarType = {
    tags: Array<tagType>
    bestPosts: Array<bestPostType>
}
export type postsPageType = {
    posts: Array<PostType>
}
export type shareStoryPageType = {
    storyText: string
}
export type dialogsPageType = {
    chat: Array<ChatType>
    dialogs: Array<OpenDialogPropsType>
}
export type stateType = {
    postsPage: postsPageType
    dialogsPage: dialogsPageType
    shareStoryPage: shareStoryPageType
    sideBar: sideBarType
}

export const state: stateType = {
    postsPage: {
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
    },
    shareStoryPage : {
        storyText: ''
    },
    dialogsPage: {
        chat: [
            {
                id: v1(),
                author: 'notYou',
                message: 'How are you'
            },
            {
                id: v1(),
                author: 'you',
                message: 'How are you'
            },
            {
                id: v1(),
                author: 'notYou',
                message: 'How are you'
            },

        ],
        dialogs: [
            {name: 'Katya', id: v1()},
            {name: 'Dasha', id: v1()},
            {name: 'Anna', id: v1()},
            {name: 'Viktor', id: v1()},
            {name: 'Andrey', id: v1()},
        ],
    },
    sideBar: {
        tags: [
            {
                name: 'Family',
                priority: 9,
            },
            {
                name: 'Strange',
                priority: 16,
            },
            {
                name: 'Love',
                priority: 14,
            },
            {
                name: 'Pizdec',
                priority: 20,
            },
            {
                name: 'Scary',
                priority: 13,
            },
            {
                name: 'Childhood',
                priority: 12,
            },
            {
                name: 'Work',
                priority: 22,
            },
        ],
        bestPosts: [
            {text: 'Best post', id: v1()},
            {text: 'Best post', id: v1()},
            {text: 'Best post', id: v1()},
            {text: 'Best post', id: v1()},
            {text: 'Best post', id: v1()},
            {text: 'Best post', id: v1()},
        ],
    },
}


//functions
let renderEntireTree = (state: stateType) => {
    console.log('state was changed')
}

export const subscribe = (observer: (state: stateType) => void) => {
    renderEntireTree = observer
}

export const changeLikesCount = (value: boolean, postId: string) => {
    const obj = state.postsPage.posts.find((post) => post.postId === postId)
    if (obj) {
        value ? obj.postLikes++ : obj.postLikes--
        renderEntireTree(state);
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        postText: postMessage,
        postPhoto: 'https://helo',
        postDate: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}}`,
        postLikes: 0,
        postId: v1()
    }
    state.postsPage.posts.push(newPost)
    renderEntireTree(state)
}

export const changeShareStoryText = (shareStoryText: string) => {
    state.shareStoryPage.storyText = shareStoryText
    renderEntireTree(state)
}