import React from 'react';
import styles from './Sidebar.module.css';
import {BestPosts} from "./BestPosts/BestPosts";
import {Tags} from "./Tags/Tags";
import {sideBarType} from "../../../redux/sidebarReducer";

type SidebarPropsType = {
    state: sideBarType
}

const SidebarSecret: React.FC<SidebarPropsType> = (props) => {
    return (
        <div id={styles.sidebar}>
            <BestPosts bestPosts={props.state.bestPosts}/>
            <Tags tags={props.state.tags}/>
        </div>
    );
}
export const Sidebar = React.memo(SidebarSecret)