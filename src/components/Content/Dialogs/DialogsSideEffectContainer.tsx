import React from 'react'
import {Dialogs, DialogsPropsType} from "./Dialogs";

export class DialogsSideEffectContainer extends React.Component<DialogsPropsType> {
    componentDidMount() {
        document.title = 'Dialogs Page'
    }
    render() {
        return (
            <Dialogs {...this.props}/>
        )
    }
}