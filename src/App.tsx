import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkMyAuth} from "./redux/authReducer";
import {stateType} from "./redux/redux_store";
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

//types
export type wayType = 0 | 1

function AppSecret() {
    //first enter?
    const [way, setWay] = useState<wayType>(1)
    const dispatch = useDispatch()
    const error = useSelector<stateType, string>(state => state.appState.error)

    //auth user
    useEffect(() => {
        dispatch(checkMyAuth())
    }, [dispatch])

    return (
        <HashRouter>
            <div id='appWrapper'>
                {way === 0 ? <Header setWay={setWay}/> :
                    <>
                        <Content/>
                    </>}
                {
                    error && <ErrorMessage message={error}/>
                }
            </div>
        </HashRouter>
    );
}

const App = React.memo(AppSecret)

export default App;
