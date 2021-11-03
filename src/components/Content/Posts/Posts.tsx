import React, {ChangeEvent, useMemo} from "react";
import classes from "./Posts.module.css";
import {Post} from "./Post/Post";
import {postsPageType} from "../../../redux/postsReducer";

export type PostsPropsType = {
    state: postsPageType
    onChangeFilterHandler: (event: ChangeEvent<HTMLSelectElement>) => void
    changeLikesCount: (change: boolean, postId: string) => void
}

const PostsSecret: React.FC<PostsPropsType> = (props) => {
    console.log('from posts')
    // sort posts every rerender because post could be added or likes count could be change d
    const postsForRender = useMemo(() => {
        console.log('from useMemo')
        let tempPosts = props.state.posts
        switch (props.state.filter) {
            case "rate":
                tempPosts.sort((postA, postB) => {
                    return postA.postLikes > postB.postLikes ? -1 : 1
                })
                break
            case "reverse rate":
                tempPosts.sort((postA, postB) => {
                    return postA.postLikes > postB.postLikes ? 1 : -1
                })
                break
            case 'date':
            default:
                break
        }
        return tempPosts
    }, [props.state.posts, props.state.filter])

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

export const Posts = React.memo(PostsSecret)