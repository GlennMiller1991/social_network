import React from "react";
import styles from "./User.module.css";
import anonym from "../../../../static/anonym.jpg";
import {userType} from "../../../../redux/usersReducer";

type UserPropsType = userType & {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
const UserSecret: React.FC<UserPropsType> = (props) => {
    return (
        <div key={props.id} className={styles.wrapper}>
            <div className={styles.visual}>
                <div><img className={styles.photo}
                    //@ts-ignore
                          src={props.photos?.large || anonym}
                          alt={'there is no foto'}/></div>
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
}

export const User = React.memo(UserSecret)