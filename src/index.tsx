import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, changeLikesCount, changeShareStoryText, state, stateType} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import {subscribe} from "./redux/state";

const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 changeLikesCount={changeLikesCount}
                 addPost={addPost}
                 changeShareStoryText={changeShareStoryText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state);
subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// tlog results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
