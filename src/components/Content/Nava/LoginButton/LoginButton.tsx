import React from "react";
import {useSelector} from "react-redux";
import {stateType} from "../../../../redux/redux_store";
import {authType} from "../../../../redux/authReducer";
import styles from "../Nava.module.css";
import {NavLink} from "react-router-dom";

export const LoginButton = React.memo(() => {
    const authState = useSelector<stateType, authType>(state => state.authState)
    return (
        <div className={`${styles.button}`}>
            {
                authState.isAuth ?
                    <div className={styles.loginButton}>
                        <div className={styles.greeting}>In As</div>
                        <div className={styles.login}>{authState.login?.slice(0, 5) + '...'}</div>
                    </div> :
                    <NavLink activeClassName={styles.active}
                             to='/login'>
                        LOGIN
                    </NavLink>
            }
        </div>
    )
})