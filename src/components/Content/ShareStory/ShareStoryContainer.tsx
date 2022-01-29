import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import React, {useEffect} from "react";
import styles from "./ShareStory.module.css";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {useDispatch} from "react-redux";
import {addPostActionCreator} from "../../../redux/postsReducer";
import {maxLength10, requiredField} from "../../../utils/validators/validator";
import {WrappedFieldProps} from "redux-form/lib/Field";
import {setError} from "../../../redux/appReducer";

export const ShareStoryContainer: React.FC = withAuthRedirect(() => {
    const dispatch = useDispatch()
    const onSubmitPost = (formData: ShareFormPropsType) => {
        dispatch(addPostActionCreator(formData.story))
        formData.story = ''
    }
    useEffect(() => {
        document.title = 'Share Your Story'
    })
    return (
        <ShareStory onSubmit={onSubmitPost}/>
    )
})


type ShareFormPropsType = {
    story: string,
}
export const ShareForm: React.FC<InjectedFormProps<ShareFormPropsType>> = React.memo((props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field className={styles.txt}
                       type={'text'}
                       component={TextArea}
                       name={'story'}
                       placeholder={'Share your story with us'}
                       validate={[requiredField, maxLength10]}/>
            </form>
        </div>
    )
})

const ShareStory = reduxForm<ShareFormPropsType>({form: 'share'})(ShareForm)

export type CustomFormPropsType = {
    required?: boolean,
    type: string,
    name: string,
    placeholder: string,
    validate: Function[],
    className: string,
}
const TextArea: React.FC<WrappedFieldProps & CustomFormPropsType> = React.memo((
    {meta,
        input,
        ...restProps}) => {
    const dispatch = useDispatch()
    const error = !!meta.error && !!meta.touched
    if (error) {
        restProps.className = restProps.className + ' ' + styles.errorBorder
        dispatch(setError(meta.error))
    }
    return (
        <div>
            <textarea {...input} {...restProps}/>
            <button type={'submit'}
                    className={styles.btn}>Send
            </button>
        </div>
    )
})