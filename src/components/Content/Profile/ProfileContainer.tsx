import React, {ChangeEvent} from 'react';
import {
    addCommentActionCreator,
    changeNewCommentTextActionCreator,
    ProfilePageType
} from "../../../redux/profileReducer";
import {actionsType} from "../../../redux/redux_store";
import {Comment} from "./Comment/Comment";
import {Profile} from "./Profile";

type ProfileContainerPropsType = {
    state: ProfilePageType
    dispatch: (action: actionsType) => void
}

const ProfileContainerSecret: React.FC<ProfileContainerPropsType> = (props) => {
    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewCommentTextActionCreator(event.currentTarget.value))
    }
    const onClickCallback = () => {
        props.dispatch(addCommentActionCreator(props.state.newComm))
        props.dispatch(changeNewCommentTextActionCreator(''))
    }

    return (
        <Profile onChangeCallback={onChangeCallback}
                 onClickCallback={onClickCallback}
                 state={props.state}/>
    )
}
export const ProfileContainer = React.memo(ProfileContainerSecret)

