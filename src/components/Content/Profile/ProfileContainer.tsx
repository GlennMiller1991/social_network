import React, {ChangeEvent} from 'react';
import {
    addCommentActionCreator,
    changeNewCommentTextActionCreator,
} from "../../../redux/profileReducer";
import {Profile} from "./Profile";
import {StoreContext} from "../../../redux/StoreContext";

/*
type ProfileContainerPropsType = {
    state: ProfilePageType
    dispatch: (action: actionsType) => void
}*/

const ProfileContainerSecret: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
                        store.dispatch(changeNewCommentTextActionCreator(event.currentTarget.value))
                    }
                    const onClickCallback = () => {
                        store.dispatch(addCommentActionCreator(store.getState().profilePage.newComm))
                        store.dispatch(changeNewCommentTextActionCreator(''))
                    }

                    return <Profile onChangeCallback={onChangeCallback}
                             onClickCallback={onClickCallback}
                             state={store.getState().profilePage}/>
            }
            }
        </StoreContext.Consumer>
    )
}
export const ProfileContainer = React.memo(ProfileContainerSecret)

