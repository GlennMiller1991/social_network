import React from 'react';
import styles from './Content.module.css';
import {Nava} from "./Nava/Nava";
import {Posts} from "./Posts/Posts";
import {Sidebar} from "./Sidebar/Sidebar";
import {Dialogs} from "./Dialogs/Dialogs";
import {Redirect, Route} from 'react-router-dom';
import {Best} from "./Best/Best";
import {ShareStory} from "./ShareStory/ShareStory";
import {ProfileContainer} from "./Profile/ProfileContainer";
import {actionsType, stateType} from "../../redux/redux_store";

//types
type ContentPropsType = {
    state: stateType
    dispatch: (action: actionsType) => void
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
                           render={() => <Posts/>}/>
                    <Route path='/best' component={Best}/>
                    <Route path='/share' render={() => <ShareStory state={props.state.shareStoryPage}
                                                                   dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
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