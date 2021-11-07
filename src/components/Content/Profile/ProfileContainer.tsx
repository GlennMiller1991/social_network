import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {
    addCommentActionCreator,
    changeNewCommentTextActionCreator,
    fullUserType,
    ProfilePageType,
    setUser
} from "../../../redux/profileReducer";
import {PageLoader} from "../../common/PageLoader/PageLoader";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authType} from "../../../redux/authReducer";

type responseProfileType = fullUserType
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
                props.match.params.userId :
                authState.isAuth ? authState.id : null
            if (userId) {
                axios
                    .get<responseProfileType>(
                        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
                        {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '686ffc4e-9713-4acd-8b49-1b6f4dcbd337',
                            }
                        }
                    ).then((res) => {
                    if (res.data !== null) {
                        dispatch(setUser(res.data))
                        setIsLoad(false)
                    }
                })
            }
        }, [])

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
export const ProfileContainer = withRouter(ProfileSideEffectContainer)