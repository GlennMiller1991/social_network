import React from "react";
import styles from "./Chat.module.css";
import {ChatType} from "../../../../redux/dialogsReducer";

//types
type ChatPropsType = {
    messages: Array<ChatType>
}

//components
const ChatSecret: React.FC<ChatPropsType> = (props) => {
    console.log('Chat rerender')
    //callbacks
    const mappedMessages = props.messages.map((m) => {
        return (
            <div className={(m.author === 'you') ? styles.you : styles.notYou}
                 key={m.id}>
                {m.author === 'notYou' ?
                    <img src={'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'}
                         alt={'no foto'}/> : false}
                <div>
                    <div className={styles.author}>
                        {m.author}
                    </div>
                    <div className={styles.message}>
                        {m.message}
                    </div>
                </div>
                {m.author === 'you' ?
                    <img src={'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'}
                         alt={'no foto'}/> : false}

            </div>
        );
    });

    //return
    return (
        <div>
            {mappedMessages}
        </div>
    );
}
export const Chat = React.memo(ChatSecret)