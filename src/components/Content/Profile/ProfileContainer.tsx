import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {Profile} from "./Profile";
import {
    addCommentActionCreator, changeLoadUserStatus, changeMyStatus,
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
import {compose} from "redux";

type PathParamsType = {
    userId: string,
}
const ProfileSideEffectContainer: React.FC<RouteComponentProps<PathParamsType>> = React.memo(
    (props) => {
        //props
        const [renew, setRenew] = useState(false)
        const state = useSelector<stateType, ProfilePageType>(state => state.profilePage)
        const authState = useSelector<stateType, authType>(state => state.authState)
        const dispatch = useDispatch()
        const onChangeCallback = useCallback((event: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewCommentTextActionCreator(event.currentTarget.value))
        }, [dispatch])
        const onClickCallback = useCallback((text: string) => {
            dispatch(addCommentActionCreator(text))
        }, [dispatch])
        const changeMyStatusHandler = useCallback((status: string) => {
            dispatch(changeMyStatus(status))
        }, [dispatch])
        //initial state
        console.log('from profile container')
        useEffect(() => {
            document.title = 'Profile Page'
            const userId = props.match.params.userId ?
                Number(props.match.params.userId) :
                authState.isAuth ? authState.id : null
            if (userId) {
                profileAPI.getProfile(userId)
                    .then((data) => {
                        if (data !== null) {
                            profileAPI.getStatus(userId)
                                .then(statusData => {
                                    data.status = statusData ? statusData : ''
                                })
                                .catch(error => {
                                    data.status = 'Status was not found'
                                    console.log(error.message)
                                })
                                .finally(() => {
                                    dispatch(setUser(data))
                                })
                        }
                    })
                    .catch(err => {
                        setTimeout(() => {
                            console.log('from setTimeout')
                            setRenew(!renew)
                        }, 3000)
                    })

            }
            return () => {
                dispatch(changeLoadUserStatus(true))
            }
        }, [
            dispatch,
            props.match.params.userId,
            authState.isAuth,
            authState.id,
            renew])

        return (
            <>
                {
                    state.loadUserStatus ?
                        <PageLoader/> :
                        <Profile onChangeCallback={onChangeCallback}
                                 onClickCallback={onClickCallback}
                                 changeStatusHandler={changeMyStatusHandler}
                                 state={state}
                                 currentUser={authState.isAuth ? authState.id : -1}/>
                }
            </>
        )
    }
)
export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    withRouter
)(ProfileSideEffectContainer)