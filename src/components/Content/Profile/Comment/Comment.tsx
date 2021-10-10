import {commentType} from "../../../../redux/profileReducer";
import {actionsType} from "../../../../redux/redux_store";
import React from "react";

export type CommentPropsType = {
    state: commentType
}
const CommentSecret: React.FC<CommentPropsType> = (props) => {
    return (
        <div>
            <div>{props.state.postId}</div>
            <div>{props.state.text}</div>
            <div>{props.state.id}</div>
        </div>
    )
}

export const Comment = React.memo(CommentSecret)