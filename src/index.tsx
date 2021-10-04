import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {dialogsPageType, postsPageType, shareStoryPageType, sideBarType, stateType} from './redux/store'
import {store} from './redux/redux_store'
import ReactDOM from "react-dom";
import App from "./App";
import {EmptyObject} from "redux";

const renderEntireTree = (state: EmptyObject & { postsPage: postsPageType; shareStoryPage: shareStoryPageType; dialogsPage: dialogsPageType; sideBar: sideBarType; }) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(() => renderEntireTree(store.getState()))

// If you want to start measuring performance in your app, pass a function
// tlog results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
