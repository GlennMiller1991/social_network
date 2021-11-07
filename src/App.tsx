import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthData} from "./redux/authReducer";

//types
export type wayType = 0 | 1
type responseAuthType = {
    data: {
        id: number,
        login: string,
        email: string,
    },
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}

function AppSecret() {
    //first enter?
    const [way, setWay] = useState<wayType>(1)

    const dispatch = useDispatch()

    //auth user
    useEffect(() => {
        axios
            .get<responseAuthType>(
                `https://social-network.samuraijs.com/api/1.0/auth/me`,
                {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '686ffc4e-9713-4acd-8b49-1b6f4dcbd337',
                    }
                }
            )
            .then(response => {
                    if (!response.data.resultCode) {
                        const {id, login, email} = response.data.data
                        dispatch(setAuthData(id, login, email))
                    }
                }
            )
    }, [])

    return (
        <HashRouter>
            <div id='appWrapper'>
                {way === 0 ? <Header setWay={setWay}/> :
                    <>
                        <Content/>
                        <Footer/>
                    </>}
            </div>
        </HashRouter>
    );
}

const App = React.memo(AppSecret)

export default App;
