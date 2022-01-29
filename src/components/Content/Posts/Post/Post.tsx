import React from "react";
import styles from './Post.module.css';
import {vkPostType} from "../../../../redux/postsReducer";
import {LikesCount} from "./LikesCount/LikesCount";
import anonym from './../../../../static/anonym.jpg'

//types
export type PostPropsType = {
    postInfo: vkPostType,
    changeLikesCount: (change: boolean, postId: string) => void
}

//components
const PostSecret: React.FC<PostPropsType> = (props) => {
    //return
    return (
        <div className={styles.post}>
            <div className={styles.text}>
                <div className={styles.postText}>{props.postInfo.text}</div>
                <div className={styles.postDate}>{new Date(props.postInfo.date * 1000).toLocaleDateString(
                    'en-US',
                    {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    }
                )}</div>
                <LikesCount postId={props.postInfo.hash}
                            likesCount={props.postInfo.likes.count}
                            changeLikesCount={props.changeLikesCount}/>
            </div>
            <div className={styles.image}>
                <img src={anonym} alt='not available'/>
            </div>
        </div>
    );
}
export const Post = React.memo(PostSecret)