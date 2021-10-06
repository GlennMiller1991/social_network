import React from "react";
import styles from './LikesCount.module.css'

//types
type LikesCountPropsType = {
    likesCount: number
    changeLikesCount: (value: boolean) => void
}

const LikesCountSecret: React.FC<LikesCountPropsType> = (props) => {

    //return
    return (
        <div className={styles.like}>
            <button className={styles.btn} onClick={() => props.changeLikesCount(false)}>-</button>
            <button>{props.likesCount}</button>
            <button className={styles.btn} onClick={() => props.changeLikesCount(true)}>+</button>
        </div>
    )
}
export const LikesCount = React.memo(LikesCountSecret)
