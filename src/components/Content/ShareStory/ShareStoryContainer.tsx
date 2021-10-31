import {ChangeEvent} from "react";
import {addPostActionCreator} from "../../../redux/postsReducer";
import {changeShareStoryTextActionCreator} from "../../../redux/shareStoryReducer";
import {connect} from "react-redux";
import {actionsType, stateType} from "../../../redux/redux_store";
import {ShareStorySideEffectContainer} from "./ShareStorySideEffectContainer";

const mapStateToProps = (state: stateType) => {
    return {
        state: state.shareStoryPage
    }
}
const mapDispatchToProps = (dispatch: (action: actionsType) => void) => {
    return {
        onChangeCallback: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeShareStoryTextActionCreator(event.currentTarget.value))
        },
        onClickCallback: (formText: string) => {
            dispatch(addPostActionCreator(formText))
            dispatch(changeShareStoryTextActionCreator(''))
        }
    }
}
export const ShareStoryContainer = connect(mapStateToProps, mapDispatchToProps)(ShareStorySideEffectContainer)