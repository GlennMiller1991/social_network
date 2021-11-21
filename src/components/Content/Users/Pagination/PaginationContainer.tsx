import React, {KeyboardEvent, MouseEvent, useCallback} from 'react'
import {Pagination} from "./Pagination";

type PaginationContainerPropsType = {
    pageSize: number,
    currentPage: number,
    pageFieldValue: string,
    totalUsersCount: number
    changePageFieldValue: (value: string) => void
    renewUsers: (requiredPage: number, pageSize: number) => void,
}
export const PaginationContainer: React.FC<PaginationContainerPropsType> = React.memo((props) => {
    const pages = (totalUsersCount: number, pageSize: number) => {
        return Math.ceil(totalUsersCount / pageSize)
    }
    const onClickHandler = useCallback((e: MouseEvent<HTMLSpanElement>, requiredPage: number) => {
        props.renewUsers(requiredPage, props.pageSize)
    }, [props.pageSize])
    const onKeyPressHandler = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = e.currentTarget.value
            props.renewUsers(Number(value), props.pageSize)
        }
    },
        [props.pageSize]
    )

    return (
        <Pagination totalPages={pages(props.totalUsersCount, props.pageSize)}
                    currentPage={props.currentPage}
                    pageFieldValue={props.pageFieldValue}
                    changePageFieldValue={props.changePageFieldValue}
                    onKeyPressHandler={onKeyPressHandler}
                    onClickHandler={onClickHandler}/>
    )
})