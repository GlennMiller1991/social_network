import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/redux_store'
import ReactDOM from "react-dom";
import App from "./App";
import {StoreContext} from './redux/StoreContext';

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(() => renderEntireTree())

// If you want to start measuring performance in your app, pass a function
// tlog results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
