import React, {ChangeEvent, useState} from 'react';
import classes from './Posts.module.css';
import {Post} from "./Post/Post";
import {postsPageType} from "../../../redux/state";

//types
type PostsPropsType = {
    state: postsPageType
    changeLikesCount: (value: boolean, postId: string) => void
}


//components
export const Posts: React.FC<PostsPropsType> = (props) => {
    //initial data
    const [sort, setSort] = useState<string>('date')

    //calbacks
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSort(event.currentTarget.value)
    }

    //filter
    const stringToNumber = (string: string) => {
        const newString = string.split('.');
        let sum = 0
        for (let i in newString) {
            console.log(i)
            sum += Number(i)
        }
        return sum
    }
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
                            <Post postText={post.postText}
                                  postPhoto={post.postPhoto}
                                  postDate={post.postDate}
                                  postLikes={post.postLikes}
                                  postId={post.postId}
                                  changeLikesCount={props.changeLikesCount}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
