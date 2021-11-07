import React, {ChangeEvent} from 'react';
import {ProfilePageType} from "../../../redux/profileReducer";
import {UserInfo} from "./UserInfo/UserInfo";

export type ProfilePropsType = {
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCallback: (text: string) => void,
    state: ProfilePageType,
}

export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {
    console.log('from ProfileSecret')
    return (
        <UserInfo user={props.state.currentUserData}/>
    )
})

