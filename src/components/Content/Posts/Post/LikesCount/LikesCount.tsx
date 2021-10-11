import React from "react";
import styles from './LikesCount.module.css'

//types
type LikesCountPropsType = {
    postId: string
    likesCount: number
    changeLikesCount: (change: boolean, postId: string) => void
}

const LikesCountSecret: React.FC<LikesCountPropsType> = (props) => {

    //return
    return (
        <div className={styles.like}>
            <button className={styles.btn} onClick={() => props.changeLikesCount(false, props.postId)}>-</button>
            <button>{props.likesCount}</button>
            <button className={styles.btn} onClick={() => props.changeLikesCount(true, props.postId)}>+</button>
        </div>
    )
}
export const LikesCount = React.memo(LikesCountSecret)
