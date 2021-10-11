import React from 'react';
import styles from './Dialogs.module.css'
import {Chat} from "./Chat/Chat";
import {OpenDialog} from "./OpenDialog/OpenDialog";
import {dialogsPageType} from "../../../redux/dialogsReducer";

//types
type DialogsPropsType = {
    state: dialogsPageType
    setFilter: (filterValue: string) => void
}

//components
const DialogsSecret: React.FC<DialogsPropsType> = (props) => {

    //return
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <div onClick={() => props.setFilter('you')}>you</div>
                <div onClick={() => props.setFilter('notYou')}>notYou</div>
                <div onClick={() => props.setFilter('all')}>all</div>
            </div>
            <div className={styles.openDialogs}>
                {props.state.dialogs.map((dialog) => {
                    return (
                        <OpenDialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                    );
                })}
            </div>
            <div className={styles.dialogs}>
                <Chat messages={props.state.chat}/>
            </div>
        </div>
    );
}
export const Dialogs = React.memo(DialogsSecret)