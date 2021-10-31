import React from 'react'
import {ShareStory, ShareStoryPropsType} from "./ShareStory";

export class ShareStorySideEffectContainer extends React.Component<ShareStoryPropsType> {
    componentDidMount() {
        document.title = 'Share Your Story'
    }
    render() {
        return (
            <ShareStory {...this.props}/>
        )
    }
}