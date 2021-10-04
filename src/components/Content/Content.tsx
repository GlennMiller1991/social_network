import React from 'react';
import styles from './Content.module.css';
import {Nava} from "./Nava/Nava";
import {Posts} from "./Posts/Posts";
import {Sidebar} from "./Sidebar/Sidebar";
import {Dialogs} from "./Dialogs/Dialogs";
import {Redirect, Route} from 'react-router-dom';
import {Best} from "./Best/Best";
import {ShareStory} from "./ShareStory/ShareStory";
import {Profile} from "./Profile/Profile";
import {stateType} from "../../redux/state";

//types
type ContentPropsType = {
    state: stateType
    addPost: (postMessage: string) => void
    changeLikesCount: (value: boolean, postId: string) => void
    changeShareStoryText: (text: string) => void
}

//components
export const Content: React.FC<ContentPropsType> = (props) => {
    return (
        <div id={styles.content}>
            <div id={styles.nava}><Nava/></div>
            <div id={styles.contentContent}>
                <div id={styles.general}>
                    <Route path={'/'} exact render={() => <Redirect to={'/main'}/>}/>
                    <Route path='/main'
                           render={() => <Posts state={props.state.postsPage}
                                                changeLikesCount={props.changeLikesCount}/>}/>
                    <Route path='/best' component={Best}/>
                    <Route path='/share' render={() => <ShareStory state={props.state.shareStoryPage}
                                                                   changeShareStoryText={props.changeShareStoryText}
                                                                   addPost={props.addPost}/>}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
            <div id={styles.sidebar}>
                <div id={styles.general}>
                    <Sidebar state={props.state.sideBar}/></div>
            </div>
        </div>
    );
}