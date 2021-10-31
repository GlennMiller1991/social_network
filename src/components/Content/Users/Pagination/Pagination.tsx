import React, {KeyboardEvent, MouseEvent} from "react";
import styles from "./Pagination.module.css";
import axios from "axios";
import {responseType} from "../Users";
import {userType} from "../../../../redux/usersReducer";

type PaginationSecretPropsType = {
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    totalUsersCount: number
    changePageFieldValue: (value: string) => void
    setUsers: (users: userType[], totalUsersCount: number) => void,
    changeUsersPage: (pageNumber: number) => void,
    onEnterPressHandler: (value: string) => void
}

const PaginationSecret: React.FC<PaginationSecretPropsType> = (props) => {
    const pages = (totalUsersCount: number, pageSize: number) => {
        return Math.ceil(totalUsersCount / pageSize)
    }

    const onClickHandler = (e: MouseEvent<HTMLSpanElement>, requiredPage: number) => {
        props.changeUsersPage(requiredPage)
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${requiredPage}`
            ).then((res) => {
            if (res.status === 200) {
                props.setUsers(res.data.items, res.data.totalCount)
            }
        })
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = e.currentTarget.value
            props.onEnterPressHandler(value)
            axios
                .get<responseType>(
                    `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${Number(value)}`
                ).then((res) => {
                if (res.status === 200) {
                    props.setUsers(res.data.items, res.data.totalCount)
                }
            })
        }
    }

    return (
        <div className={styles.pages}>
                    <span className={styles.changePage}
                          onClick={(e) => onClickHandler(e, props.currentPage - 1)}>Previous</span>
            <span className={styles.currentPage}>
                        <input size={1}  //String(props.totalUsersCount).length
                               onKeyPress={onKeyPressHandler}
                               onChange={(e) => props.changePageFieldValue(e.currentTarget.value)}
                               value={props.pageFieldValue}/>/
                    </span>
            <span className={styles.lastPage}
                  onClick={(e) => onClickHandler(
                      e,
                      pages(props.totalUsersCount, props.pageSize)
                  )}>
                        {pages(props.totalUsersCount, props.pageSize)}
                    </span>
            <span className={styles.changePage}
                  onClick={(e) => onClickHandler(e, props.currentPage + 1)}>
                        Next
                    </span>
        </div>
    )
}

export const Pagination = React.memo(PaginationSecret)