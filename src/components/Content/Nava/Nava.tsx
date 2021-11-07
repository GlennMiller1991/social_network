import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Nava.module.css";
import {useSelector} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {authType} from "../../../redux/authReducer";

const NavaSecret = () => {

    return (
        <div id={styles.nava}>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/'>
                    <img src='https://otvet.imgsmail.ru/download/82092830_8fae13c057d409cc317bcda273f470e5_800.jpg'
                         alt='Nothing'/>
                </NavLink>
            </div>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/share'>
                    SHARE
                </NavLink>
            </div>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/best'>
                    BEST
                </NavLink>
            </div>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/profile'>
                    PROFILE
                </NavLink>
            </div>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/dialogs'>
                    DIALOGS
                </NavLink>
            </div>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/users'>
                    USERS
                </NavLink>
            </div>
            <div className={styles.button}></div>
            <LoginButton/>
        </div>
    );
}
export const Nava = React.memo(NavaSecret)

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