import React, {ChangeEvent, LegacyRef} from 'react';
import styles from './ShareStory.module.css';
import {shareStoryPageType} from "../../../redux/shareStoryReducer";
import {authType} from "../../../redux/authReducer";

export type ShareStoryPropsType = {
    shareStoryState: shareStoryPageType,
    authState: authType,
    onClickCallback: (formText: string) => void
    onChangeCallback: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

//components
export const ShareStory: React.FC<ShareStoryPropsType> = React.memo((props) => {
    const ref: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    return (
        <React.Fragment>
            <div>
            <textarea placeholder={'Share your story with us'}
                      value={props.shareStoryState.storyText}
                      onChange={(event) => props.onChangeCallback(event)}
                      maxLength={1000}
                      ref={ref}
                      className={styles.txt}> </textarea>
                <button onClick={() => props.onClickCallback(ref.current ? ref.current.value : '')}
                        className={styles.btn}>Send
                </button>
            </div>
        </React.Fragment>
    )
})