import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";

//types
export type wayType = 0 | 1

function AppSecret() {
    const [way, setWay] = useState<wayType>(1)

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
