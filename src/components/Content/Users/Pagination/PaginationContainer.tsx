import React, {KeyboardEvent, MouseEvent, useCallback} from 'react'
import {userType} from "../../../../redux/usersReducer";
import {Pagination} from "./Pagination";
import axios from "axios";
import {responseType} from "../UsersSideEffectContainer";

type PaginationContainerPropsType = {
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    totalUsersCount: number
    changePageFieldValue: (value: string) => void
    setUsers: (users: userType[], totalUsersCount: number) => void,
    changeUsersPage: (pageNumber: number) => void,
    onEnterPressHandler: (value: string) => void
}
export const PaginationContainer: React.FC<PaginationContainerPropsType> = (props) => {
    const pages = (totalUsersCount: number, pageSize: number) => {
        return Math.ceil(totalUsersCount / pageSize)
    }
    const onClickHandler = useCallback((e: MouseEvent<HTMLSpanElement>, requiredPage: number) => {
        props.changeUsersPage(requiredPage)
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${requiredPage}`
            ).then((res) => {
            if (res.status === 200) {
                props.setUsers(res.data.items, res.data.totalCount)
            }

        })
    }, [props.pageSize])
    const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        console.log('from onKeyPressHandler')
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
    }, [props.pageSize])
    return (
        <Pagination totalPages={pages(props.totalUsersCount, props.pageSize)}
                    currentPage={props.currentPage}
                    pageFieldValue={props.pageFieldValue}
                    changePageFieldValue={props.changePageFieldValue}
                    onKeyPressHandler={onKeyPressHandler}
                    onClickHandler={onClickHandler}/>
    )
}