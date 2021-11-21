import React, {KeyboardEvent, MouseEvent} from "react";
import styles from "./Pagination.module.css";

type PaginationSecretPropsType = {
    totalPages: number,
    currentPage: number,
    pageFieldValue: string,
    changePageFieldValue: (value: string) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    onClickHandler: (e: MouseEvent<HTMLSpanElement>, requiredPage: number) => void,
}

const PaginationSecret: React.FC<PaginationSecretPropsType> = (props) => {
    return (
        <div className={styles.pages}>
                    <span className={styles.changePage}
                          onClick={(e) => props.onClickHandler(
                              e,
                              props.currentPage - 1
                          )}>
                        Previous
                    </span>
            <span className={styles.currentPage}>
                        <input size={1}  //String(props.totalUsersCount).length
                               onKeyPress={props.onKeyPressHandler}
                               onChange={(e) => props.changePageFieldValue(e.currentTarget.value)}
                               value={props.pageFieldValue}/>/
                    </span>
            <span className={styles.lastPage}
                  onClick={(e) => props.onClickHandler(
                      e,
                      props.totalPages
                  )}>
                        {props.totalPages}
                    </span>
            <span className={styles.changePage}
                  onClick={(e) => props.onClickHandler(e, props.currentPage + 1)}>
                        Next
                    </span>
        </div>
    )
}

export const Pagination = React.memo(PaginationSecret)