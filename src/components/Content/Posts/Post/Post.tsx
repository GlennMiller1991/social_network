import React from "react";
import styles from './Post.module.css';
import {LikesCount} from "./LikesCount/LikesCount";
import {actionsType} from "../../../../redux/redux_store";
import {LikesCountContainer} from "./LikesCount/LIkesCountContainer";

//types
export type PostType = {
    postText: string
    postPhoto: string
    postDate: string
    postLikes: number
    postId: string
}
export type PostPropsType = {
    postInfo: PostType
    dispatch: (action: actionsType) => void
}

//components
const PostSecret: React.FC<PostPropsType> = (props) => {

    //return
    return (
        <div className={styles.post}>
            <div className={styles.text}>
                <div className={styles.postText}>{props.postInfo.postText}</div>
                <div className={styles.postDate}>{props.postInfo.postDate}</div>
                <LikesCountContainer likesCount={props.postInfo.postLikes}
                                     dispatch={props.dispatch}
                                     postId={props.postInfo.postId}/>
            </div>
            <div className={styles.image}>
                <img src={props.postInfo.postPhoto} alt='not available'/>
            </div>
        </div>
    );
}
export const Post = React.memo(PostSecret)