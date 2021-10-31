import React from 'react'
import {Posts, PostsPropsType} from "./Posts";

export class PostsSideEffectContainer extends React.Component<PostsPropsType> {
    componentDidMount() {
        document.title = 'Posts Page'
    }
    render() {
        return (
            <Posts {...this.props}/>
        )
    }
}