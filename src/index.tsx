import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {storeType, store} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = (store: storeType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 changeLikesCount={store.changeLikesCount.bind(store)}
                 addPost={store.addPost.bind(store)}
                 changeShareStoryText={store.changeShareStoryText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);
store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// tlog results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
