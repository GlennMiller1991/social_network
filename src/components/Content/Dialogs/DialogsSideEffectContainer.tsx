import React from 'react'
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {Redirect} from "react-router-dom";
import {authType} from "../../../redux/authReducer";

type DialogsSideEffectContainerPropsType = DialogsPropsType & {
    authState: authType,
}
export class DialogsSideEffectContainer extends React.Component<DialogsSideEffectContainerPropsType> {
    componentDidMount() {
        document.title = 'Dialogs Page'
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.authState.isAuth ?
                        <Dialogs {...this.props}/> :
                        <Redirect to={'/login'}/>
                }
            </React.Fragment>
        )
    }
}