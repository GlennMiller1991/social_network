import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {Profile} from "./Profile";
import {
    addCommentActionCreator,
    changeNewCommentTextActionCreator,
    ProfilePageType,
    setUser
} from "../../../redux/profileReducer";
import {PageLoader} from "../../common/visual/PageLoader/PageLoader";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authType} from "../../../redux/authReducer";
import {profileAPI} from "../../../api/profileAPI";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

type PathParamsType = {
    userId: string,
}
const ProfileSideEffectContainer: React.FC<RouteComponentProps<PathParamsType>> = React.memo(
    (props) => {
        //props
        const state = useSelector<stateType, ProfilePageType>(state => state.profilePage)
        const authState = useSelector<stateType, authType>(state => state.authState)
        const dispatch = useDispatch()
        const onChangeCallback = useCallback((event: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewCommentTextActionCreator(event.currentTarget.value))
        }, [dispatch])
        const onClickCallback = useCallback((text: string) => {
            dispatch(addCommentActionCreator(text))
        }, [dispatch])

        //initial state
        console.log('from profile container')
        const [isLoad, setIsLoad] = useState(true)
        useEffect(() => {
            document.title = 'Profile Page'
            const userId = props.match.params.userId ?
                Number(props.match.params.userId) :
                authState.isAuth ? authState.id : null
            if (userId) {
                profileAPI.getProfile(userId)
                    .then((data) => {
                        if (data !== null) {
                            dispatch(setUser(data))
                            setIsLoad(false)
                        }
                    })
            }
        }, [
            dispatch,
            props.match.params.userId,
            authState.isAuth,
            authState.id])

        return (
            <>
                {
                    isLoad ?
                        <PageLoader/> :
                        <Profile onChangeCallback={onChangeCallback}
                                 onClickCallback={onClickCallback}
                                 state={state}/>
                }
            </>
        )
    }
)
export const ProfileContainer = withAuthRedirect(withRouter(ProfileSideEffectContainer))