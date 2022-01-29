import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {HashRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {stateType} from "./redux/redux_store";
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import {appStateType} from "./redux/appReducer";
function AppSecret() {
    const appState = useSelector<stateType, appStateType>(state => state.appState)

    return (
        <HashRouter>
            <div id='appWrapper'>
                {!appState.isInitialized ? <Header/> :
                    <>
                        <Content/>
                    </>}
                {
                    appState.error && <ErrorMessage message={appState.error}/>
                }
            </div>
        </HashRouter>
    );
}

const App = React.memo(AppSecret)

export default App;
