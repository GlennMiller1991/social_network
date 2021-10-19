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

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
    }
    componentDidMount() {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            if (res.status === 200) {
                this.props.setUsers(res.data.items)
            } else {
                this.props.setUsers([
                    {
                        id: 1,
                        name: 'AlexisTheGreat',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 2,
                        name: 'Alex',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 3,
                        name: 'AlexisTheGreat',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 4,
                        name: 'Alex',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 5,
                        name: 'AlexisTheGreat',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 6,
                        name: 'Alex',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                ])
            }
        })
    }

    render() {
        return (
            <div className={styles.page}>
                {this.props.state.users.map(user => {
                    return (
                        <div key={user.id} className={styles.wrapper}>
                            <div className={styles.visual}>
                                <div><img className={styles.photo}
                                          src={user.photos.large === null ? anonym : ''}
                                          alt={'there is no foto'}/></div>
                                <div className={styles.name}>{user.name}</div>
                                <div>{user.followed ?
                                    <button className={styles.unsubBtn}
                                            onClick={() => this.props.unfollow(user.id)}>unsubscribe</button> :
                                    <button className={styles.subBtn}
                                            onClick={() => this.props.follow(user.id)}>subscribe</button>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

/*export const Users: React.FC<UsersPropsType> = (props) => {
    if (!props.state.users.length) {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            if (res.status === 200) {
                props.setUsers(res.data.items)
            } else {
                props.setUsers([
                    {
                        id: 1,
                        name: 'AlexisTheGreat',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 2,
                        name: 'Alex',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 3,
                        name: 'AlexisTheGreat',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 4,
                        name: 'Alex',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 5,
                        name: 'AlexisTheGreat',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                    {
                        id: 6,
                        name: 'Alex',
                        status: null,
                        followed: false,
                        photos: {
                            large: null,
                            small: null,
                        },
                        uniqueUrlName: null,
                    },
                ])
            }
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
}*/
