import React from "react";
import {Post} from "./Post";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";
import {PostType} from "../../../../redux/postsReducer";

export default {
    title: 'Post',
    component: Post
}

const post: PostType = {
    postText: 'Is there anybody going to listen to my story' +
        '? All about girl who came to stay. She is a kind of girl you' +
        'want so much, it makes you sorry, still you don\'t regret a single day',
    postPhoto: 'https://www.culturesonar.com/wp-content/uploads/2017/08/beatles-with-a-girl-getty-600x400.jpg',
    postDate: '07.23.2021',
    postLikes: -1,
    postId: v1(),
}

export const DefaultPost = () => <Post postInfo={post}
                                       changeLikesCount={action('changeLikesCount')}
/>