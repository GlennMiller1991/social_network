import React, {ChangeEvent} from 'react';
import classes from './Posts.module.css';
import {Post} from "./Post/Post";
import {filterPostsActionCreator} from "../../../redux/postsReducer";
import {StoreContext} from "../../../redux/StoreContext";

//components
const PostsSecret: React.FC = () => {

    //return
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
                        store.dispatch(filterPostsActionCreator(event.currentTarget.value))
                    }
                    return (
                        <div>
                            Sorted by
                            <select value={store.getState().postsPage.filter} onChange={onChangeHandler}>
                                <option value={'date'}>date</option>
                                <option value={'rate'}>rate</option>
                                <option value={'reverse rate'}>reverse rate</option>
                            </select>
                            <div id={classes.posts}>
                                {store.getState().postsPage.posts.map((post) => {
                                    return (
                                        <div key={post.postId}>
                                            <Post postInfo={post}
                                                  dispatch={store.dispatch}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>)
                }
            }</StoreContext.Consumer>
    );
}
export const Posts = React.memo(PostsSecret)