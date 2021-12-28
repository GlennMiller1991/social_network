import React from 'react'
import {Dialogs, DialogsPropsType} from "./Dialogs";
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
                <Dialogs {...this.props}/>
            </React.Fragment>
        )
    }
}