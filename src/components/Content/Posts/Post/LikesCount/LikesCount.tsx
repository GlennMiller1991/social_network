import React from "react";
import styles from './LikesCount.module.css'
import {actionsType} from "../../../../../redux/store";
import {changeLikesCountActionCreator} from "../../../../../redux/postsReducer";

//types
type LikesCountPropsType = {
    likesCount: number
    dispatch: (action: actionsType) => void
    postId: string
}

export const LikesCount: React.FC<LikesCountPropsType> = (props) => {

    //callbacks
    const changeLikesCountHandler = (change: boolean, postId: string) => {
        props.dispatch(changeLikesCountActionCreator(change, postId))
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