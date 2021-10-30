import React from "react";
import {userType} from "../../redux/usersReducer";
import styles from './Users.module.css'
import axios from "axios";
import {MouseEvent, KeyboardEvent} from "react";
import {User} from "./User/User";
import {Pagination} from "./Pagination/Pagination";

type UsersPropsType = {
    users: userType[],
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[], totalUsersCount: number) => void,
    changeUsersPage: (pageNumber: number) => void,
    changePageFieldValue: (value: string) => void,
    onEnterPressHandler: (value: string) => void
}
export type responseType = {
    items: userType[]
    error: number | null
    totalCount: number
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
    }

    //life cycle
    componentDidMount() {
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
            ).then((res) => {
            console.log(res)
            if (res.status === 200) {
                this.props.setUsers(res.data.items, res.data.totalCount)
            }
        })
    }

    //callbacks
    onClickHandler = (e: MouseEvent<HTMLSpanElement>, requiredPage: number) => {
        this.props.changeUsersPage(requiredPage)
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${requiredPage}`
            ).then((res) => {
            if (res.status === 200) {
                this.props.setUsers(res.data.items, res.data.totalCount)
            }
        })
    }
    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = e.currentTarget.value
            this.props.onEnterPressHandler(value)
            axios
                .get<responseType>(
                    `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${Number(value)}`
                ).then((res) => {
                if (res.status === 200) {
                    this.props.setUsers(res.data.items, res.data.totalCount)
                }
            })
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.page}>
                    {this.props.users.map(user => <User id={user.id}
                                                        name={user.name}
                                                        followed={user.followed}
                                                        status={user.status}
                                                        photos={user.photos}
                                                        uniqueUrlName={user.uniqueUrlName}
                                                        follow={this.props.follow}
                                                        unfollow={this.props.unfollow}/>)}
                </div>
                <Pagination pageFieldValue={this.props.pageFieldValue}
                            pageSize={this.props.pageSize}
                            totalUsersCount={this.props.totalUsersCount}
                            currentPage={this.props.currentPage}
                            changePageFieldValue={this.props.changePageFieldValue}
                            changeUsersPage={this.props.changeUsersPage}
                            setUsers={this.props.setUsers}
                            onEnterPressHandler={this.props.onEnterPressHandler}/>
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
