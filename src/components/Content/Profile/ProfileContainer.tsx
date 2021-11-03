import {ChangeEvent} from 'react';
import {
    addCommentActionCreator, changeLoadUserStatus,
    changeNewCommentTextActionCreator, fullUserType, setUser,
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
        },
        setUserHandler: (user: fullUserType) => {
            dispatch(setUser(user))
        },
        changeLoadUser: (value: boolean) => {
            dispatch(changeLoadUserStatus(value))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSideEffectContainer)