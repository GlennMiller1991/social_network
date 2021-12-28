import {ChangeEvent} from "react";
import {addPostActionCreator} from "../../../redux/postsReducer";
import {changeShareStoryTextActionCreator} from "../../../redux/shareStoryReducer";
import {connect} from "react-redux";
import {actionsType, stateType} from "../../../redux/redux_store";
import {ShareStorySideEffectContainer} from "./ShareStorySideEffectContainer";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

const mapStateToProps = (state: stateType) => {
    return {
        shareStoryState: state.shareStoryPage,
        authState: state.authState,
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
export const ShareStoryContainer = withAuthRedirect(
    connect(mapStateToProps, mapDispatchToProps)(ShareStorySideEffectContainer)
)