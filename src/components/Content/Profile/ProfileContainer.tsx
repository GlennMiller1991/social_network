import {ChangeEvent} from 'react';
import {
    addCommentActionCreator,
    changeNewCommentTextActionCreator,
} from "../../../redux/profileReducer";
import {actionsType, stateType} from "../../../redux/redux_store";
import {connect} from "react-redux";
import {ProfileSideEffectContainer} from "./ProfileSideEffectContainer";

const mapStateToProps = (state: stateType) => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: (action: actionsType) => void) => {
    return {
        onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewCommentTextActionCreator(event.currentTarget.value))
        },
        onClickCallback: (text: string) => {
            dispatch(addCommentActionCreator(text))
            dispatch(changeNewCommentTextActionCreator(''))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSideEffectContainer)