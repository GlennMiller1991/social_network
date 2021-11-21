import React from "react";
import styles from "./User.module.css";
import anonym from "../../../../static/anonym.jpg";
import {userType} from "../../../../redux/usersReducer";
import {NavLink, Redirect} from "react-router-dom";
import {authType} from "../../../../redux/authReducer";

type UserPropsType = userType & {
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
    authState: authType,
}

export const User: React.FC<UserPropsType> = React.memo((props) => {
    console.log('from user')

    return (
        <div key={props.id} className={styles.wrapper}>
            <div className={styles.visual}>
                <div><NavLink to={`/profile/${props.id}`}><img className={styles.photo}
                    //@ts-ignore
                                                               src={props.photos.large || anonym}
                                                               alt={'there is no foto'}/>
                </NavLink></div>
                <div className={styles.name}>
                    {
                        props.name.length > 10 ?
                            props.name.slice(0, 10) + '...' :
                            props.name
                    }
                </div>
                <div>{
                    props.authState.isAuth ?
                        (
                            props.followed ?
                                <button className={styles.unsubBtn}
                                        onClick={() => props.unfollowUser(props.id)}
                                        disabled={props.waitForChangingStatus}>unsubscribe</button> :
                                <button className={styles.subBtn}
                                        onClick={() => props.followUser(props.id)}
                                        disabled={props.waitForChangingStatus}>subscribe</button>
                        ) :
                        <NavLink to={'/login'}>
                            <button className={styles.subBtn}>
                                subscribe
                            </button>
                        </NavLink>
                }
                </div>
            </div>
        </div>
    )
})