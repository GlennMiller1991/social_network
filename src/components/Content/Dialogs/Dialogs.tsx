import React, {useState} from 'react';
import styles from './Dialogs.module.css'
import {Chat, ChatType} from "./Chat/Chat";
import {OpenDialog} from "./OpenDialog/OpenDialog";
import {dialogsPageType} from "../../../redux/store";

//types
type FilterType = 'you' | 'notYou' | 'all'
type DialogsPropsType = {
    state: dialogsPageType
}

//callbacks
const filterMessages = (messages: Array<ChatType>, filter: FilterType): Array<ChatType> => {
    if (filter === 'all') {
        return messages;
    } else {
        return messages.filter((m) => {
            return m.author === filter;
        });
    }
}

//components
const DialogsSecret: React.FC<DialogsPropsType> = (props) => {

    //initial states
    const [filter, setFilter] = useState<FilterType>('all');

    //callbacks
    const setNotYou = () => {
        setFilter('notYou');
    }
    const setYou = () => {
        setFilter('you');
    }
    const setAll = () => {
        setFilter('all');
    }

    //filter
    const filteredMessages = filterMessages(props.state.chat, filter);

    //return
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <div onClick={setYou}>you</div>
                <div onClick={setNotYou}>notYou</div>
                <div onClick={setAll}>all</div>
            </div>
            <div className={styles.openDialogs}>
                {props.state.dialogs.map((dialog) => {
                    return (
                        <OpenDialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                    );
                })}
            </div>
            <div className={styles.dialogs}>
                <Chat messages={filteredMessages}/>
            </div>
        </div>
    );
}
export const Dialogs = React.memo(DialogsSecret)