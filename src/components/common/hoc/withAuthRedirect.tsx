import React, {ComponentType} from 'react'
import {useSelector} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import { Login } from '../../Content/Login/Login';

export function withAuthRedirect<T>(Component: ComponentType<T>) {
     return (props: T) => {
        const isAuth = useSelector<stateType, boolean>(state => state.authState.isAuth)
        if (isAuth) {
            return <Component {...props}/>
        } else {
            return <Login/>
        }
    }
}