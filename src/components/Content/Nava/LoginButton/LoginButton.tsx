import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../../../redux/redux_store";
import {authType, log} from "../../../../redux/authReducer";
import styles from "../Nava.module.css";
import {NavLink} from "react-router-dom";

export const LoginButton = React.memo(() => {
    const authState = useSelector<stateType, authType>(state => state.authState)
    const dispatch = useDispatch()
    const onLogoutClick = () => {
        dispatch(log(false))
    }
    return (
        <div className={`${styles.button}`}>
            {
                authState.isAuth ?
                    <span className={styles.link} onClick={onLogoutClick}>
                        LOGOUT
                    </span> :
                    <NavLink activeClassName={styles.active}
                             to='/login'>
                        LOGIN
                    </NavLink>
            }
        </div>
    )
})