import React, {ChangeEvent, LegacyRef, useState} from 'react';
import styles from './ShareStory.module.css';
import {actionsType, shareStoryPageType} from "../../../redux/store";
import {changeShareStoryTextActionCreator} from "../../../redux/shareStoryReducer";
import {addPostActionCreator} from "../../../redux/postsReducer";

type ShareStoryPropsType = {
    dispatch: (action: actionsType) => void
    state: shareStoryPageType
}

//components
export const ShareStory: React.FC<ShareStoryPropsType> = (props) => {

    //initial states
    const [error, setError] = useState<boolean>(false)

    const ref: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    //callbacks
    const onClickCallback = () => {
        props.dispatch(addPostActionCreator(ref.current ? ref.current.value : ''))
        props.dispatch(changeShareStoryTextActionCreator(''))
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeShareStoryTextActionCreator(event.currentTarget.value))
    }

    //return
    return (
        <div>
            <textarea placeholder={'Share your story with us'}
                      value={props.state.storyText}
                      onChange={onChangeHandler}
                      maxLength={1000}
                      ref={ref}
                      className={styles.txt}></textarea>
            <button onClick={onClickCallback}
                    className={styles.btn}>Send
            </button>
            {error && <div className={styles.error}>error</div>}
        </div>
    )
}