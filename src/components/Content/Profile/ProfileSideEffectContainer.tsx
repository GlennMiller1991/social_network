import React, {ChangeEvent} from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {fullUserType, ProfilePageType} from "../../../redux/profileReducer";

type responseProfileType = fullUserType
type ProfileSideEffectPropsType = {
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCallback: (text: string) => void,
    setUserHandler: (user: fullUserType) => void,
    changeLoadUser: (value: boolean) => void,
    state: ProfilePageType,
}

export class ProfileSideEffectContainer extends React.Component<ProfileSideEffectPropsType> {
    constructor(props: ProfileSideEffectPropsType) {
        super(props)
    }

    componentDidMount() {
        document.title = 'Profile Page'
        axios
            .get<responseProfileType>(
                `https://social-network.samuraijs.com/api/1.0/profile/${this.props.state.currentUserId}`
            ).then((res) => {
            if (res.data !== null) {
                this.props.setUserHandler(res.data)
                this.props.changeLoadUser(false)
            }
        })
    }

    render() {
        return (
            <Profile onChangeCallback={this.props.onChangeCallback}
                     onClickCallback={this.props.onClickCallback}
                     state={this.props.state}/>
        )
    }
}