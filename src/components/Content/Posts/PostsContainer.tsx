import {ChangeEvent} from 'react';
import {changePageSizeActionCreator, pageSizeType} from "../../../redux/postsReducer";
import {connect} from "react-redux";
import {actionsType, stateType} from "../../../redux/redux_store";
import {PostsSideEffectContainer} from "./PostsSideEffectContainer";

const mapStateToProps = (state: stateType) => {
    return {
        state: state.postsPage
    }
}
const mapDispatchToProps = (dispatch: (obj: actionsType) => void ) => {
    return {
        onChangeFilterHandler: (event: ChangeEvent<HTMLSelectElement>) => {
            dispatch(changePageSizeActionCreator(+event.currentTarget.value as pageSizeType))
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsSideEffectContainer)