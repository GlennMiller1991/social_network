import React from "react";
import {usersPageType, userType} from "../../redux/usersReducer";
import styles from './Users.module.css'
import axios from "axios";
import anonym from '../../static/anonym.jpg'

type UsersPropsType = {
    state: usersPageType,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
}

type responseType = {
    items: userType[]
    error: number | null
    totalCount: number
}
export const Users: React.FC<UsersPropsType> = (props) => {
    if (!props.state.users.length) {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            props.setUsers(res.data.items)
        })
    }

    const usersView = props.state.users.map(user => {
        return (
            <div key={user.id} className={styles.wrapper}>
                <div className={styles.visual}>
                    <div><img className={styles.photo}
                              src={user.photos.large === null ? anonym : ''}
                              alt={'there is no foto'}/></div>
                    <div className={styles.name}>{user.name}</div>
                    <div>{user.followed ?
                        <button className={styles.unsubBtn}
                                onClick={() => props.unfollow(user.id)}>unsubscribe</button> :
                        <button className={styles.subBtn} onClick={() => props.follow(user.id)}>subscribe</button>}
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className={styles.page}>
            {usersView}
        </div>
    )
}
