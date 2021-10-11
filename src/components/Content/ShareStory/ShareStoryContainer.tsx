import React, {ChangeEvent, LegacyRef} from "react";
import {ShareStory} from "./ShareStory";
import {StoreContext} from "../../../redux/StoreContext";
import {addPostActionCreator} from "../../../redux/postsReducer";
import {changeShareStoryTextActionCreator} from "../../../redux/shareStoryReducer";

export const ShareStoryContainer = () => {

    //return
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    //callbacks
                    const onClickCallback = (formText: string) => {
                        store.dispatch(addPostActionCreator(formText))
                        store.dispatch(changeShareStoryTextActionCreator(''))
                    }
                    const onChangeCallback = (event: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(changeShareStoryTextActionCreator(event.currentTarget.value))
                    }

                    //return
                    return <ShareStory state={store.getState().shareStoryPage}
                                       onChangeCallback={onChangeCallback}
                                       onClickCallback={onClickCallback}/>
                }
            }
        </StoreContext.Consumer>
    )
}