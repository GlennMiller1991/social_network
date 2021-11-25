import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAuthData} from "./redux/authReducer";
import {authAPI} from "./api/authAPI";

//types
export type wayType = 0 | 1

function AppSecret() {
    //first enter?
    const [way, setWay] = useState<wayType>(1)

    const dispatch = useDispatch()

    //auth user
    useEffect(() => {
        authAPI.checkAuth()
            .then(response => {
                    if (!response.resultCode) {
                        const {id, login, email} = response.data
                        dispatch(setAuthData(id, login, email))
                    }
                }
            )
    }, [dispatch])

    return (
        <HashRouter>
            <div id='appWrapper'>
                {way === 0 ? <Header setWay={setWay}/> :
                    <>
                        <Content/>
                    </>}
            </div>
        </HashRouter>
    );
}

const App = React.memo(AppSecret)

export default App;
