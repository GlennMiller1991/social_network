import React, {ChangeEvent} from 'react';
import {fullUserType, ProfilePageType} from "../../../redux/profileReducer";
import {Comment} from "./Comment/Comment";
import {PageLoader} from "../../common/PageLoader/PageLoader";

export type ProfilePropsType = {
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCallback: (text: string) => void,
    state: ProfilePageType,
}

const ProfileSecret: React.FC<ProfilePropsType> = (props) => {
    console.log('from ProfileSecret')
    console.log(props.state.loadUserStatus)
    return (
        <>
            {props.state.loadUserStatus ?
                <PageLoader/> :
                <div>
                    Commentaries
                    {props.state.comments.map((com, id) => <Comment key={id} state={com}/>)}
                    <div>
                        <input onChange={props.onChangeCallback} value={props.state.newComm}/> new comment
                        <hr/>
                        <button onClick={() => props.onClickCallback(props.state.newComm)}>post</button>
                    </div>
                </div>
            }
        </>
    )
}
export const Profile = React.memo(ProfileSecret)

