import React, {useCallback} from "react";
import styles from "./User.module.css";
import anonym from "../../../../static/anonym.jpg";
import {userType} from "../../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../../api/followAPI";
//DODELAY DISABLED BUTTONS ON CHANGE SUBSCRIBE STATUS

type UserPropsType = userType & {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const UserContainer: React.FC<UserPropsType> = React.memo((props) => {
    const {follow, unfollow, ...restProps} = props
    const followSideEffect = useCallback((userId: number) => {
        followAPI.follow(userId)
            .then(() => {
                follow(userId)
            })
    }, [follow])
    const unfollowSideEffect = useCallback((userId: number) => {
        followAPI.unfollow(userId)
            .then(() => {
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
                            onClick={() => props.unfollow(props.id)}
                            disabled={props.waitForChangingStatus}>unsubscribe</button> :
                    <button className={styles.subBtn}
                            onClick={() => props.follow(props.id)}
                            disabled={props.waitForChangingStatus}>subscribe</button>}
                </div>
            </div>
        </div>
    )
})