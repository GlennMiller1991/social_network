import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nava.module.css";

export const Nava = () => {
    return (
        <div id={styles.nava}>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active} to='/'>
                    <img src='https://otvet.imgsmail.ru/download/82092830_8fae13c057d409cc317bcda273f470e5_800.jpg'
                         alt='No image'/>
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
                <NavLink activeClassName={styles.active}  to='/profile'>
                    PROFILE
                </NavLink>
            </div>
            <div className={styles.button}>
                <NavLink activeClassName={styles.active}  to='/dialogs'>
                    DIALOGS
                </NavLink>
            </div>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.button}>
                <NavLink className={styles.search}
                        activeClassName={styles.active}
                         to=''>
                    SEARCH
                </NavLink>
                <div className={styles.searchBar}></div>
            </div>
        </div>
    );
}