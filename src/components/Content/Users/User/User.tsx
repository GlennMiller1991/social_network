import React, {useCallback} from "react";
import styles from "./User.module.css";
import anonym from "../../../../static/anonym.jpg";
import {userType} from "../../../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

type responseFollowType = {
    data: {},
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}
type UserPropsType = userType & {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const UserContainer: React.FC<UserPropsType> = React.memo((props) => {
    const {follow, unfollow, ...restProps} = props
    const followSideEffect = useCallback((userId: number) => {
        axios
            .post<responseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                {},
                {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '686ffc4e-9713-4acd-8b49-1b6f4dcbd337'
                    }
                })
            .then(response => {
                props.follow(userId)
            })
    }, [props.follow])
    const unfollowSideEffect = useCallback((userId: number) => {
        axios
            .delete<responseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '686ffc4e-9713-4acd-8b49-1b6f4dcbd337'
                    }
                })
            .then(response => {
                unfollow(userId)
            })
    }, [unfollow])
    return (
        <User follow={followSideEffect} unfollow={unfollowSideEffect} {...restProps}/>
    )
})
export const User: React.FC<UserPropsType> = React.memo((props) => {
    console.log('from user')
    return (
        <div key={props.id} className={styles.wrapper}>
            <div className={styles.visual}>
                <div><NavLink to={`/profile/${props.id}`}><img className={styles.photo}
                    //@ts-ignore
                          src={props.photos.large || anonym}
                          alt={'there is no foto'}/></NavLink></div>
                <div className={styles.name}>
                    {
                        props.name.length > 10 ?
                            props.name.slice(0, 10) + '...' :
                            props.name
                    }
                </div>
                <div>{props.followed ?
                    <button className={styles.unsubBtn}
                            onClick={() => props.unfollow(props.id)}>unsubscribe</button> :
                    <button className={styles.subBtn}
                            onClick={() => props.follow(props.id)}>subscribe</button>}
                </div>
            </div>
        </div>
    )
})