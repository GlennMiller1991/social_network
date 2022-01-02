import React, {ChangeEvent} from 'react';
import {ProfilePageType} from "../../../redux/profileReducer";
import {UserInfo} from "./UserInfo/UserInfo";

export type ProfilePropsType = {
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCallback: (text: string) => void,
    state: ProfilePageType,
    currentUser: number | null,
    changeStatusHandler: (status: string) => void,
}

export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {
    console.log('from ProfileSecret')
    return (
        <React.Fragment>
            <UserInfo user={props.state.currentUserData} currentUser={props.currentUser} changeStatusHandler={props.changeStatusHandler}/>
        </React.Fragment>
    )
})
