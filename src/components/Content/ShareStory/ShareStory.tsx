import React, {ChangeEvent, LegacyRef, MouseEventHandler, useState} from 'react';
import styles from './ShareStory.module.css';
import {actionsType, shareStoryPageType} from "../../../redux/state";

type ShareStoryPropsType = {
    dispatch: (action: actionsType) => void
    state: shareStoryPageType
    changeShareStoryText: (text: string) => void
}

//components
export const ShareStory: React.FC<ShareStoryPropsType> = (props) => {

    //initial states
    const [error, setError] = useState<boolean>(false)

    const ref: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    //callbacks
    const onClickCallback = () => {
        props.dispatch({type: 'ADD-POST', postMessage: ref.current ? ref.current.value : ''})
        props.changeShareStoryText('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeShareStoryText(event.currentTarget.value)
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