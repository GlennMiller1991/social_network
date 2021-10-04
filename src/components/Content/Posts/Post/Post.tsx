import React from "react";
import styles from './Post.module.css';
import {LikesCount} from "./LikesCount/LikesCount";

//types
export type PostType = {
    postText: string
    postPhoto: string
    postDate: string
    postLikes: number
    postId: string
}
export type PostPropsType = {
    postText: string
    postPhoto: string
    postDate: string
    postLikes: number
    postId: string
    changeLikesCount: (value: boolean, postId: string) => void
}

//components
export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.text}>
                <div className={styles.postText}>{props.postText}</div>
                <div className={styles.postDate}>{props.postDate}</div>
                <LikesCount likesCount={props.postLikes}
                            changeLikesCount={props.changeLikesCount}
                            postId={props.postId}/>
            </div>
            <div className={styles.image}>
                <img src={props.postPhoto} alt='not available'/>
            </div>
        </div>
    );
}
