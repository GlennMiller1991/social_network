import React from "react";
import {userType} from "../../redux/usersReducer";
import styles from './Users.module.css'
import axios from "axios";
import anonym from '../../static/anonym.jpg'
import {MouseEvent} from "react";

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

    pages(totalUsersCount: number, pageSize: number) {
        return +(this.props.totalUsersCount / this.props.pageSize).toFixed() +
            ((this.props.totalUsersCount % this.props.pageSize > 0) ? 1 : 0)
    }

    componentDidMount() {
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
            ).then((res) => {
            console.log(res)
            if (res.status === 200) {
                this.props.setUsers(res.data.items, res.data.totalCount)
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
                ], 6)
            }
        })
    }

    onClickHandler = (e: MouseEvent<HTMLSpanElement>, requiredPage: number) => {
        this.props.changeUsersPage(requiredPage)
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${requiredPage}`
            ).then((res) => {
            if (res.status === 200) {
                this.props.setUsers(res.data.items, res.data.totalCount)
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
                ], 6)
            }
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.page}>
                    {this.props.users.map(user => {
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
                <div className={styles.pages}>
                    <span className={styles.changePage}
                          onClick={(e) => this.onClickHandler(e, this.props.currentPage - 1)}>&lt;</span>
                    <span className={styles.currentPage}>
                        <input size={String(this.props.totalUsersCount).length}
                               onChange={(e) => this.props.changePageFieldValue(e.currentTarget.value)}
                               value={this.props.pageFieldValue}/>/
                    </span>
                    <span className={styles.lastPage}
                          onClick={(e) => this.onClickHandler(
                              e,
                              this.pages(this.props.totalUsersCount, this.props.pageSize)
                          )}>
                        {this.pages(this.props.totalUsersCount, this.props.pageSize)}
                    </span>
                    <span className={styles.changePage}
                          onClick={(e) => this.onClickHandler(e, this.props.currentPage + 1)}>
                        &gt;
                    </span>
                </div>
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
