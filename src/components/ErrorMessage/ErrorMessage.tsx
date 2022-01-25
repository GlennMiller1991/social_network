import React, {useEffect} from "react";
import styles from "./ErrorMessage.module.css";
import {useDispatch} from "react-redux";
import {setError} from "../../redux/appReducer";

type ErrorMessagePropsType = {
    message: string,
}
export const ErrorMessage: React.FC<ErrorMessagePropsType> = React.memo((props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(setError(''))
        }, 10000)

    }, [dispatch])
    return (
        <div className={styles.errorMessage}>
            <span className={styles.errorText}>
                {
                    props.message
                }. Try again.
            </span>
        </div>
    )
})