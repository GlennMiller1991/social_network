import React from "react";
import styles from './Post.module.css';
import {PostType} from "../../../../redux/postsReducer";
import {LikesCount} from "./LikesCount/LikesCount";

//types
export type PostPropsType = {
    postInfo: PostType
    changeLikesCount: (change: boolean, postId: string) => void
}

//components
const PostSecret: React.FC<PostPropsType> = (props) => {
    console.log(`post #${props.postInfo.postId} rerender`)
    //return
    return (
        <div className={styles.post}>
            <div className={styles.text}>
                <div className={styles.postText}>{props.postInfo.postText}</div>
                <div className={styles.postDate}>{props.postInfo.postDate}</div>
                <LikesCount postId={props.postInfo.postId}
                            likesCount={props.postInfo.postLikes}
                            changeLikesCount={props.changeLikesCount}/>
            </div>
            <div className={styles.image}>
                <img src={props.postInfo.postPhoto} alt='not available'/>
            </div>
        </div>
    );
}
export const Post = React.memo(PostSecret)