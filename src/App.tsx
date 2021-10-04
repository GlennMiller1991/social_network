import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";
import {actionsType, stateType} from "./redux/store";

//types
export type wayType = 0 | 1
type AppPropsType = {
    state: stateType
    dispatch: (action: actionsType) => void
}

function App(props: AppPropsType) {
    const [way, setWay] = useState<wayType>(1)

    return (
        <HashRouter>
            <div id='appWrapper'>
                {way === 0 ? <Header setWay={setWay}/> :
                    <>
                        <Content state={props.state}
                                 dispatch={props.dispatch}/>
                        <Footer/>
                    </>}
            </div>
        </HashRouter>
    );
}

export default App;
