import React from "react";
import styles from './LikesCount.module.css'
import {actionsType} from "../../../../../redux/redux_store";
import {changeLikesCountActionCreator} from "../../../../../redux/postsReducer";
import {LikesCount} from "./LikesCount";

//types
type LikesCountPropsType = {
    likesCount: number
    postId: string
    dispatch: (action: actionsType) => void
}

const LikesCountContainerSecret: React.FC<LikesCountPropsType> = (props) => {

    //callbacks
    const changeLikesCount = (change: boolean) => {
        props.dispatch(changeLikesCountActionCreator(change, props.postId))
    }

    //return
    return <LikesCount likesCount={props.likesCount} changeLikesCount={changeLikesCount}/>
}
export const LikesCountContainer = React.memo(LikesCountContainerSecret)