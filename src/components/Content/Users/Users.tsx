import React from "react";
import {userType} from "../../../redux/usersReducer";
import styles from './Users.module.css'
import {User} from "./User/User";
import {PaginationContainer} from "./Pagination/PaginationContainer";


export type UsersPropsType = {
    users: userType[],
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    changePageFieldValue: (value: string) => void,
    getUsers: (pageSize: number, currentPage: number) => void,
    renewUsers: (requiredPage: number, pageSize: number) => void,
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
}

const UsersSecret: React.FC<UsersPropsType> = (props) => {
    console.log('from users')
    return (
        <div className={styles.container}>
            <div className={styles.page}>
                {props.users.map(user => <User key={user.id}
                                                        id={user.id}
                                                        name={user.name}
                                                        followed={user.followed}
                                                        status={user.status}
                                                        photos={user.photos}
                                                        uniqueUrlName={user.uniqueUrlName}
                                                        waitForChangingStatus={user.waitForChangingStatus}
                                                        followUser={props.followUser}
                                                        unfollowUser={props.unfollowUser}/>)}
            </div>
            <PaginationContainer pageFieldValue={props.pageFieldValue}
                                 pageSize={props.pageSize}
                                 totalUsersCount={props.totalUsersCount}
                                 currentPage={props.currentPage}
                                 changePageFieldValue={props.changePageFieldValue}
                                 renewUsers={props.renewUsers}/>
        </div>
    )
}

export const Users = React.memo(UsersSecret)