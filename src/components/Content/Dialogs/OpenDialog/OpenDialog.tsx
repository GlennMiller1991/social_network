import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

//types
export type OpenDialogPropsType = {
    id: string
    name: string
}

//components
export const OpenDialog: React.FC<OpenDialogPropsType> = (props) => {
    return (
        <div className={styles.openDialog}>
        <NavLink to={`/dialogs/${props.id}`}>
    {props.name}
    </NavLink>
    </div>
);
}