import React, {ChangeEvent, useState} from 'react';
import classes from './Posts.module.css';
import {Post} from "./Post/Post";
import {actionsType} from "../../../redux/redux_store";
import {postsPageType} from "../../../redux/store";

//types
type PostsPropsType = {
    state: postsPageType
    dispatch: (action: actionsType) => void
}


//components
const PostsSecret: React.FC<PostsPropsType> = (props) => {
    //initial data
    const [sort, setSort] = useState<string>('date')

    //callbacks
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSort(event.currentTarget.value)
    }

    //filter
    const postsForRender = props.state.posts
    if (sort === 'rate') {
        postsForRender.sort((postA, postB) => {
            return postA.postLikes > postB.postLikes ? -1 : 1
        })
    } else if (sort === 'reverse rate') {
        postsForRender.sort((postA, postB) => {
            return postA.postLikes > postB.postLikes ? 1 : -1
        })
    } else if (sort === 'rate today') {
    }


    //return
    return (
        <div>
            Sorted by
            <select value={sort} onChange={onChangeHandler}>
                <option value={'date'}>date</option>
                <option value={'rate'}>rate</option>
                <option value={'reverse rate'}>reverse rate</option>
                <option value={'rate today'}>rate today</option>
            </select>
            <div id={classes.posts}>
                {postsForRender.map((post) => {
                    return (
                        <div key={post.postId}>
                            <Post postInfo={post}
                                  dispatch={props.dispatch}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export const Posts = React.memo(PostsSecret)