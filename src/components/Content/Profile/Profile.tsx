import React, {ChangeEvent} from 'react';
import {ProfilePageType} from "../../../redux/profileReducer";
import {Comment} from "./Comment/Comment";

type ProfilePropsType = {
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCallback: (text: string) => void
    state: ProfilePageType
}

const ProfileSecret: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            Commentaries
            {props.state.comments.map(com => <Comment state={com}/>)}
            <div>
                <input onChange={props.onChangeCallback} value={props.state.newComm}/> new comment<hr/>
                <button onClick={() => props.onClickCallback(props.state.newComm)}>post</button>
            </div>
        </div>
    )
}
export const Profile = React.memo(ProfileSecret)

