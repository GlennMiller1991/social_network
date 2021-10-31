import React, {ChangeEvent} from "react";
import classes from "./Posts.module.css";
import {Post} from "./Post/Post";
import {postsPageType} from "../../../redux/postsReducer";

export type PostsPropsType = {
    state: postsPageType
    onChangeFilterHandler: (event: ChangeEvent<HTMLSelectElement>) => void
    changeLikesCount: (change: boolean, postId: string) => void
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    // sort posts every rerender because post could be added or likes count could be change d
    const postsForRender = props.state.posts
    switch (props.state.filter) {
        case "rate":
            postsForRender.sort((postA, postB) => {
                return postA.postLikes > postB.postLikes ? -1 : 1
            })
            break
        case "reverse rate":
            postsForRender.sort((postA, postB) => {
                return postA.postLikes > postB.postLikes ? 1 : -1
            })
            break
        case 'date':
        default:
            break
    }
    //return
    return (
        <div>
            Sorted by
            <select value={props.state.filter} onChange={props.onChangeFilterHandler}>
                <option value={'date'}>date</option>
                <option value={'rate'}>rate</option>
                <option value={'reverse rate'}>reverse rate</option>
            </select>
            <div id={classes.posts}>
                {postsForRender.map((post) => {
                    return (
                        <div key={post.postId}>
                            <Post postInfo={post}
                                  changeLikesCount={props.changeLikesCount}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}