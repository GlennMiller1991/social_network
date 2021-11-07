import React, {KeyboardEvent, MouseEvent, useCallback} from 'react'
import {userType} from "../../../../redux/usersReducer";
import {Pagination} from "./Pagination";
import {usersAPI} from "../../../../api/usersAPI";

type PaginationContainerPropsType = {
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    totalUsersCount: number
    changePageFieldValue: (value: string) => void
    setUsers: (users: userType[], totalUsersCount: number) => void,
    changeUsersPage: (pageNumber: number) => void,
    onEnterPressHandler: (value: string) => void,
    changeLoadStatus: (usersIsLoaded: boolean) => void
}
export const PaginationContainer: React.FC<PaginationContainerPropsType> = React.memo((props) => {
    const pages = (totalUsersCount: number, pageSize: number) => {
        return Math.ceil(totalUsersCount / pageSize)
    }
    const onClickHandler = useCallback((e: MouseEvent<HTMLSpanElement>, requiredPage: number) => {
        props.changeUsersPage(requiredPage)
        usersAPI.getUsers(props.pageSize, requiredPage)
            .then(data => {
                props.setUsers(data.items, data.totalCount)
            })
            .catch(() => {
                props.changeLoadStatus(true)
            })
    }, [props.pageSize, props.setUsers, props.changeLoadStatus])
    const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        console.log('from onKeyPressHandler')
        if (e.key === 'Enter') {
            const value = e.currentTarget.value
            props.onEnterPressHandler(value)
            usersAPI.getUsers(props.pageSize, Number(value))
                .then(data => {
                    props.setUsers(data.items, data.totalCount)
                })
                .catch(() => {
                    props.changeLoadStatus(true)
                })
        }
    }, [props.pageSize, props.setUsers, props.changeLoadStatus])
    return (
        <Pagination totalPages={pages(props.totalUsersCount, props.pageSize)}
                    currentPage={props.currentPage}
                    pageFieldValue={props.pageFieldValue}
                    changePageFieldValue={props.changePageFieldValue}
                    onKeyPressHandler={onKeyPressHandler}
                    onClickHandler={onClickHandler}/>
    )
})