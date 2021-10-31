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
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[], totalUsersCount: number) => void,
    changeUsersPage: (pageNumber: number) => void,
    changePageFieldValue: (value: string) => void,
    enterPress: (value: string) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
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
                                               follow={props.follow}
                                               unfollow={props.unfollow}/>)}
            </div>
            <PaginationContainer pageFieldValue={props.pageFieldValue}
                                 pageSize={props.pageSize}
                                 totalUsersCount={props.totalUsersCount}
                                 currentPage={props.currentPage}
                                 changePageFieldValue={props.changePageFieldValue}
                                 changeUsersPage={props.changeUsersPage}
                                 setUsers={props.setUsers}
                                 onEnterPressHandler={props.enterPress}/>
        </div>
    )
}