import React from 'react';
import styles from './Sidebar.module.css';
import {BestPosts} from "./BestPosts/BestPosts";
import {Tags} from "./Tags/Tags";
import {sideBarType} from "../../../redux/store";

type SidebarPropsType = {
    state: sideBarType
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <div id={styles.sidebar}>
            <BestPosts bestPosts={props.state.bestPosts}/>
            <Tags tags={props.state.tags}/>
        </div>
    );
}