import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Nava.module.css";
import {LoginButton} from "./LoginButton/LoginButton";

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
            <div className={styles.button}></div>
            <LoginButton/>
        </div>
    );
}
export const Nava = React.memo(NavaSecret)

