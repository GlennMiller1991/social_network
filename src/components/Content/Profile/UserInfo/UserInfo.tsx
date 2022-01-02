import React from "react";
import {fullUserType} from "../../../../redux/profileReducer";
import anonym from "../../../../static/anonym.jpg";
import styles from './UserInfo.module.css'
import {PageLoader} from "../../../common/visual/PageLoader/PageLoader";
import {UserStatus} from "./UserStatus/UserStatus";

type UserInfoPropsType = {
    user: fullUserType,
    currentUser: number | null,
    changeStatusHandler: (status: string) => void,
}
export const UserInfo: React.FC<UserInfoPropsType> = React.memo((props) => {
        console.log('from user info')
        if (props.user.userId !== -1) {

            return (
                <div className={styles.wrapper}>
                    <div className={styles.photoWrapper}>
                        <img className={styles.photo}
                            //@ts-ignore
                             src={props.user.photos.large || anonym}
                             alt={'there is no foto'}/></div>
                    <div className={styles.textContainer}>
                        <ul className={styles.text}>
                            <UserStatus userId={props.user.userId}
                                        status={props.user.status}
                                        changeStatusHandler={props.changeStatusHandler}
                                        isYourStatus={props.currentUser === props.user.userId}/>
                            {props.user.userId && <li>{props.user.userId}
                                <hr/>
                            </li>}
                            {props.user.fullName && <li>{props.user.fullName}
                                <hr/>
                            </li>}
                            {props.user.aboutMe && <li>{props.user.aboutMe}
                                <hr/>
                            </li>}
                            {props.user.lookingForAJobDescription && <li>{props.user.lookingForAJobDescription}
                                <hr/>
                            </li>}
                            {props.user.contacts.vk && <li>{props.user.contacts.vk}
                                <hr/>
                            </li>}
                            {props.user.contacts.github && <li>{props.user.contacts.github}
                                <hr/>
                            </li>}
                            {props.user.contacts.instagram && <li>{props.user.contacts.instagram}
                                <hr/>
                            </li>}
                            {props.user.contacts.website && <li>{props.user.contacts.website}
                                <hr/>
                            </li>}
                            {props.user.contacts.facebook && <li>{props.user.contacts.facebook}
                                <hr/>
                            </li>}
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

