import React from "react";
import styles from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {log} from "../../../redux/authReducer";
import {WrappedFieldProps} from "redux-form/lib/Field";
import {CustomFormPropsType} from "../ShareStory/ShareStoryContainer";
import {requiredField} from "../../../utils/validators/validator";

export const Login:React.FC = () => {
    const dispatch = useDispatch()
    const onSubmitHandle = (formData: LoginFormPropsType) => {
        dispatch(log(true, formData))
    }
    return (
        <div className={styles.main}>
            <p className={styles.sign}>Sign in</p>
            <LoginReduxForm onSubmit={onSubmitHandle}/>
        </div>
    )
}

type LoginFormPropsType = {
    email: string,
    password: string,
}
export const LoginForm:React.FC<InjectedFormProps<LoginFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form1}>
            <Field className={styles.un}
                   type="text"
                   placeholder="Username"
                   name={'email'}
                   component={Input}
                   validate={[requiredField,]}/>
            <Field className={styles.pass}
                   type="password"
                   placeholder="Password"
                   name={'password'}
                   component={Input}
                   validate={[requiredField,]}/>
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

const Input: React.FC<WrappedFieldProps & CustomFormPropsType> = React.memo((
    {meta,
        input,
        ...restProps}) => {
    const error = !!meta.error && !!meta.touched
    restProps.className = restProps.className + (error ? ` ${styles.error}`: '')
    return (
        <div>
            <input {...input} {...restProps}/>
        </div>
    )
})