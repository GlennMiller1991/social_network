import React from "react";
import {fullUserType} from "../../../../redux/profileReducer";
import anonym from "../../../../static/anonym.jpg";
import styles from './UserInfo.module.css'
import {PageLoader} from "../../../common/PageLoader/PageLoader";

type UserInfoPropsType = {
    user: fullUserType
}
export const UserInfo: React.FC<UserInfoPropsType> = React.memo((props) => {
        console.log('from user info')
        if (props.user !== null) {
            return (
                <div className={styles.wrapper}>
                    <div className={styles.photoWrapper}>
                        <img className={styles.photo}
                            //@ts-ignore
                             src={props.user.photos.large || anonym}
                             alt={'there is no foto'}/></div>
                    <div className={styles.textContainer}>
                        <ul className={styles.text}>
                            <li>{props.user.userId}</li>
                            <li>{props.user.fullName}</li>
                            <li>{props.user.aboutMe}</li>
                            <li>{props.user.lookingForAJobDescription}</li>
                            {props.user.contacts.vk && <li>{props.user.contacts.vk}</li>}
                            {props.user.contacts.github && <li>{props.user.contacts.github}</li>}
                            {props.user.contacts.instagram && <li>{props.user.contacts.instagram}</li>}
                            {props.user.contacts.website && <li>{props.user.contacts.website}</li>}
                            {props.user.contacts.facebook && <li>{props.user.contacts.facebook}</li>}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <PageLoader/>
            )
        }
    }
)