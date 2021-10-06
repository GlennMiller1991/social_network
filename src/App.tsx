import React, {useState, memo} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";
import {actionsType} from "./redux/redux_store";
import {stateType} from "./redux/store";

//types
export type wayType = 0 | 1
type AppPropsType = {
    state: stateType
    dispatch: (action: actionsType) => void
}

function AppSecret(props: AppPropsType) {
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
const App = React.memo(AppSecret)

export default App;
