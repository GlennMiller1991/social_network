import React from "react";
import styles from './Post.module.css';
import {vkPostType} from "../../../../redux/postsReducer";
import {FcLike} from "react-icons/all";


//types
export type PostPropsType = {
    postInfo: vkPostType,
}

//components
const PostSecret: React.FC<PostPropsType> = (props) => {
    //return
    return (
        <div className={styles.post}>
            <div className={styles.text}>
                <div className={styles.rest}>
                    <div className={styles.like}>
                        <FcLike className={styles.icon}/>
                        {props.postInfo.likes.count}
                    </div>
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
                </div>
                <div className={styles.postText}>{props.postInfo.text}</div>

            </div>
        </div>
    );
}
export const Post = React.memo(PostSecret)