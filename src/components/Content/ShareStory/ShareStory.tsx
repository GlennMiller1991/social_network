import React, {ChangeEvent, LegacyRef} from 'react';
import styles from './ShareStory.module.css';
import {shareStoryPageType} from "../../../redux/shareStoryReducer";

type ShareStoryPropsType = {
    state: shareStoryPageType
    onClickCallback: (formText: string) => void
    onChangeCallback: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

//components
const ShareStorySecret: React.FC<ShareStoryPropsType> = (props) => {
    const ref: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    //return
    return (
        <div>
            <textarea placeholder={'Share your story with us'}
                      value={props.state.storyText}
                      onChange={(event) => props.onChangeCallback(event)}
                      maxLength={1000}
                      ref={ref}
                      className={styles.txt}> </textarea>
            <button onClick={() => props.onClickCallback(ref.current ? ref.current.value : '')}
                    className={styles.btn}>Send
            </button>
        </div>
    )
}
export const ShareStory = React.memo(ShareStorySecret)