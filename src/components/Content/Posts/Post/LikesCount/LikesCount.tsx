import React from "react";
import styles from './LikesCount.module.css'

//types
type LikesCountPropsType = {
    likesCount: number
    changeLikesCount: (value: boolean, postId: string) => void
    postId: string
}

export const LikesCount: React.FC<LikesCountPropsType> = (props) => {

    //callbacks
    const changeLikesCountHandler = (change: boolean, postId: string) => {
        props.changeLikesCount(change, postId)
    }

    //return
    return (
        <div className={styles.like}>
            <button className={styles.btn} onClick={() => changeLikesCountHandler(false, props.postId)}>-</button>
            <button>{props.likesCount}</button>
            <button className={styles.btn} onClick={() => changeLikesCountHandler(true, props.postId)}>+</button>
        </div>
    )
}