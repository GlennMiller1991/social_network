import React from "react";
import styles from './Login.module.css'

export const Login: React.FC = React.memo(() => {
    return (
        <div className={styles.main}>
            <p className={styles.sign}>Sign in</p>
            <form className={styles.form1}>
                <input className={styles.un} type="text" placeholder="Username"/>
                <input className={styles.pass} type="password" placeholder="Password"/>
                <a className={styles.submit}>Sign in</a>
                <p className={styles.forgot}><a href="#">Forgot Password?</a></p>
            </form>
        </div>
    )
})