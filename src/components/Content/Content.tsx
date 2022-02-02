import React from 'react';
import styles from './Content.module.css';
import {Nava} from "./Nava/Nava";
import {Redirect, Route} from 'react-router-dom';
import {ProfileContainer} from "./Profile/ProfileContainer";
import {PostsContainer} from "./Posts/PostsContainer";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {ShareStoryContainer} from "./ShareStory/ShareStoryContainer";
import {SidebarContainer} from "./Sidebar/SidebarContainer";
import {UsersContainer} from "./Users/UsersContainer";

//components
export const Content: React.FC = () => {
    return (
        <div id={styles.content}>
            <div id={styles.nava}><Nava/></div>
            <div id={styles.contentContent}>
                <div id={styles.general}>
                    <Route path={'/'} exact render={() => <Redirect to={'/main'}/>}/>
                    <Route path='/main' render={() => <PostsContainer/>}/>
                    <Route path='/share' render={() => <ShareStoryContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Redirect to={'/profile'}/>}/>
                </div>
            </div>
            <div id={styles.sidebar}>
                <div id={styles.general}>
                    <SidebarContainer/></div>
            </div>
        </div>
    );
}