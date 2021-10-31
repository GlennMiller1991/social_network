import React, {useMemo} from 'react';
import styles from './Dialogs.module.css'
import {Chat} from "./Chat/Chat";
import {OpenDialog} from "./OpenDialog/OpenDialog";
import {dialogsPageType} from "../../../redux/dialogsReducer";

//types
export type DialogsPropsType = {
    state: dialogsPageType
    filterMessages: (filterValue: string) => void
}

//components
const DialogsSecret: React.FC<DialogsPropsType> = (props) => {
    // filter chat messages every rerender, cause message could be added
    // or filter could be changed
    // but useMemo looking for dependencies
    let chatMessagesForRender = useMemo(() => {
            return props.state.filter !== 'all' ?
                props.state.chat.filter(mes => mes.author === props.state.filter) :
                props.state.chat
        },
        [props.state.chat, props.state.filter])

    //return
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <div onClick={() => props.filterMessages('you')}>you</div>
                <div onClick={() => props.filterMessages('notYou')}>notYou</div>
                <div onClick={() => props.filterMessages('all')}>all</div>
            </div>
            <div className={styles.openDialogs}>
                {props.state.dialogs.map((dialog) => {
                    return (
                        <OpenDialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                    );
                })}
            </div>
            <div className={styles.dialogs}>
                <Chat messages={chatMessagesForRender}/>
            </div>
        </div>
    );
}
export const Dialogs = React.memo(DialogsSecret)