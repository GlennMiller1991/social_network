import React from "react";
import styles from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login:React.FC = (props) => {
    return (
        <div className={styles.main}>
            <p className={styles.sign}>Sign in</p>
            <LoginReduxForm onSubmit={(formData: LoginFormPropsType) => console.log(formData)}/>
        </div>
    )
}

type LoginFormPropsType = {
    username: string,
    password: string,
}
export const LoginForm:React.FC<InjectedFormProps<LoginFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form1}>
            <Field className={styles.un}
                   type="text"
                   placeholder="Username"
                   name={'username'}
                   component={'input'}/>
            <Field className={styles.pass}
                   type="password"
                   placeholder="Password"
                   name={'password'}
                   component={'input'}/>
            <button type={'submit'}
                    className={styles.submit}>
                Sign in
            </button>
            <p className={styles.forgot}><a href="#">Forgot Password?</a></p>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormPropsType>({
    form: 'login',
})(LoginForm)