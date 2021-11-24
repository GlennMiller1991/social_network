import {v1} from "uuid";
import {
    addPostActionCreator,
    changeLikesCountActionCreator,
    filterPostsActionCreator,
    postsPageType,
    postsReducer
} from "./postsReducer";

//initial data
let initialState: postsPageType
beforeEach(() => {
    initialState = {
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
})

//tests
test('changeLikesCount must be correct', () => {
    let objToTest = postsReducer(initialState,
        changeLikesCountActionCreator(true, initialState.posts[0].postId))
    expect(objToTest.posts.length).toEqual(initialState.posts.length)
    expect(objToTest.posts[0].postLikes).toBe(0)
    objToTest = postsReducer(initialState,
        changeLikesCountActionCreator(false, initialState.posts[0].postId))
    expect(objToTest.posts[0].postLikes).toBe(-2)
})
test('addPost must be correct', () => {
    let objToTest = postsReducer(initialState,
        addPostActionCreator('hello')
    )
    expect(objToTest.posts.length).toBe(4)
    expect(objToTest.posts[3].postText).toBe('hello')
})
test('filterPosts must be correct', () => {
    let objToTest = postsReducer(initialState,
        filterPostsActionCreator('reverse rate')
    )
    expect(objToTest.filter).toBe('reverse rate')
    expect(objToTest.posts.length).toBe(3)
    expect(objToTest.posts[1].postId).toEqual(initialState.posts[1].postId)
    objToTest = postsReducer(initialState,
        filterPostsActionCreator('rate')
    )
    expect(objToTest.filter).toBe('rate')
    expect(objToTest.posts.length).toBe(3)
    expect(objToTest.posts[1].postId).toEqual(initialState.posts[1].postId)
    objToTest = postsReducer(initialState,
        filterPostsActionCreator('date')
    )
    expect(objToTest.filter).toBe('date')
    expect(objToTest.posts.length).toBe(3)
    expect(objToTest.posts[1].postId).toEqual(initialState.posts[1].postId)
})

