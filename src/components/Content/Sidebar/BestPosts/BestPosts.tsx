import React from "react";
import styles from "../Sidebar.module.css";

export type postType = {
    text: string
    id: string
}

type BestPostsPropsType = {
    bestPosts: Array<postType>
}


export const BestPosts: React.FC<BestPostsPropsType> = (props) => {
    return (
        <div className={styles.posts}>
            {props.bestPosts.map(bestPost => {
                return <div key={bestPost.id}
                            className={styles.post}>{bestPost.text}</div>
            })}
        </div>
    );
}