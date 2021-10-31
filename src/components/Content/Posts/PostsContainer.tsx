import {ChangeEvent} from 'react';
import {changeLikesCountActionCreator, filterPostsActionCreator} from "../../../redux/postsReducer";
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
            dispatch(filterPostsActionCreator(event.currentTarget.value))
        },
        changeLikesCount: (change: boolean, postId: string) => {
            dispatch(changeLikesCountActionCreator(change, postId))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsSideEffectContainer)