import React, {ChangeEvent, useCallback} from "react";
import classes from "./Posts.module.css";
import {Post} from "./Post/Post";
import {changeFieldValue, postsPageType, renewPosts} from "../../../redux/postsReducer";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {PaginationContainer} from "../Users/Pagination/PaginationContainer";

export type PostsPropsType = {
    state: postsPageType
    onChangeFilterHandler: (event: ChangeEvent<HTMLSelectElement>) => void
}

const PostsSecret: React.FC<PostsPropsType> = (props) => {
    const postsPage = useSelector<stateType, postsPageType>(state => state.postsPage)
    const vkIsAuth = useSelector<stateType, boolean>(state => state.authState.vkIsAuth)
    const dispatch = useDispatch()
    const changePageFieldValue = useCallback((field) => {
        dispatch(changeFieldValue(field))
    }, [dispatch])
    const renewItems = useCallback((requiredPage: number, pageSize: number) => {
        dispatch(renewPosts(requiredPage, pageSize, postsPage.pageSize))
    }, [dispatch, postsPage.pageSize])
    //return
    return (
        <div>
            {vkIsAuth &&
                <>
                    <PaginationContainer pageSize={postsPage.pageSize}
                                         className={classes.pagination}
                                         currentPage={postsPage.currentPage}
                                         pageFieldValue={postsPage.field}
                                         totalUsersCount={postsPage.count}
                                         changePageFieldValue={changePageFieldValue}
                                         renewUsers={renewItems}/>
                    <div id={classes.posts}>
                        {props.state.posts.map((post) => {
                            return (
                                <div key={post.hash}>
                                    <Post postInfo={post}/>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export const Posts = React.memo(PostsSecret)