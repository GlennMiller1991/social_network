import React from "react";
import {usersPageType, userType} from "../../redux/usersReducer";
import {v1} from "uuid";
import styles from './Users.module.css'

type UsersPropsType = {
    state: usersPageType,
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    if (!props.state.users.length) {
        props.setUsers([
            {
                id: v1(),
                name: 'AlexisTheGreat',
                status: 'Looking for job',
                isFollowed: false,
                location: 'Moscow',
                photoUrl: 'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'
            },
            {
                id: v1(),
                name: 'Alex',
                status: 'Looking for job',
                isFollowed: false,
                location: 'Moscow',
                photoUrl: 'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'
            },
            {
                id: v1(),
                name: 'AlexisTheGreat',
                status: 'Looking for job',
                isFollowed: false,
                location: 'Moscow',
                photoUrl: 'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'
            },
            {
                id: v1(),
                name: 'Alex',
                status: 'Looking for job',
                isFollowed: false,
                location: 'Moscow',
                photoUrl: 'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'
            },
            {
                id: v1(),
                name: 'AlexisTheGreat',
                status: 'Looking for job',
                isFollowed: false,
                location: 'Moscow',
                photoUrl: 'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'
            },
            {
                id: v1(),
                name: 'Alex',
                status: 'Looking for job',
                isFollowed: false,
                location: 'Moscow',
                photoUrl: 'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'
            },
        ])
    }

    const usersView = props.state.users.map(user => {
        return (
            <div key={user.id} className={styles.wrapper}>
                <div className={styles.visual}>
                    <div><img className={styles.photo} src={user.photoUrl} alt={'there is no foto'}/></div>
                    <div className={styles.name}>{user.name}</div>
                    <div>{user.location}</div>
                    <div>{user.isFollowed ?
                        <button className={styles.unsubBtn} onClick={() => props.unfollow(user.id)}>unsubscribe</button> :
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
