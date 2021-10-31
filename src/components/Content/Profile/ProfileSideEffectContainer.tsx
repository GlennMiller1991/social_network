import React from 'react'
import {Profile, ProfilePropsType} from "./Profile";

export class ProfileSideEffectContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        document.title = 'Profile Page'
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}