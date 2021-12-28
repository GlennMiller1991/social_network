import React, {ComponentType} from 'react'
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {Redirect} from "react-router-dom";

const mapStateToProps = (state: stateType) => {
    return {
        isAuth: state.authState.isAuth,
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const ContainerComponent = (props: {isAuth: boolean}) => {
        const {isAuth, ...restProps} = props
        if (isAuth) {
            return <Component {...restProps as T}/>
        } else {
            return <Redirect to={'/login'}/>
        }
    }
    return connect(mapStateToProps)(ContainerComponent)
}