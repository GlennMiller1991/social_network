import React, {ChangeEvent} from 'react';
import {changeLikesCountActionCreator, filterPostsActionCreator} from "../../../redux/postsReducer";
import {StoreContext} from "../../../redux/StoreContext";
import {Posts} from "./Posts";

//components
export const PostsContainer: React.FC = () => {

    //return
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    //callbacks
                    const onChangeFilterHandler = (event: ChangeEvent<HTMLSelectElement>) => {
                        store.dispatch(filterPostsActionCreator(event.currentTarget.value))
                    }
                    const changeLikesCount = (change: boolean, postId: string) => {
                        store.dispatch(changeLikesCountActionCreator(change, postId))
                    }

                    //return
                    return (
                        <Posts state={store.getState().postsPage}
                               onChangeFilterHandler={onChangeFilterHandler}
                               changeLikesCount={changeLikesCount}/>
                    )
                }
            }</StoreContext.Consumer>
    );
}