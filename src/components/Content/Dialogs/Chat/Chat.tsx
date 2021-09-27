import React from "react";
import styles from "./Chat.module.css";

//types
export type ChatType = {
    id: string
    author: 'you' | 'notYou'
    message: string
}
type ChatPropsType = {
    messages: Array<ChatType>
}

//components
export const Chat: React.FC<ChatPropsType> = (props) => {

    //callbacks
    const mappedMessages = props.messages.map((m) => {
        return (
            <div className={(m.author === 'you') ? styles.you : styles.notYou}
                 key={m.id}>
                {m.author === 'notYou' ?
                    <img src={'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'}/> : false}
                <div>
                    <div className={styles.author}>
                        {m.author}
                    </div>
                    <div className={styles.message}>
                        {m.message}
                    </div>
                </div>
                {m.author === 'you' ?
                    <img src={'https://glennmiller.pythonanywhere.com/static/admin_ava.jpg'}/> : false}

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