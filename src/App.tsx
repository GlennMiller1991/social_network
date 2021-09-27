import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/state";

//types
export type wayType = 0 | 1
type AppPropsType = {
    state: stateType
    changeLikesCount: (value: boolean, postId: string) => void
    changeShareStoryText: (text: string) => void
    addPost: (text: string) => void
}

function App(props: AppPropsType) {
    const [way, setWay] = useState<wayType>(1)

    return (
        <BrowserRouter>
            <div id='appWrapper'>
                {way === 0 ? <Header setWay={setWay}/> :
                    <>
                        <Content state={props.state}
                                 addPost={props.addPost}
                                 changeLikesCount={props.changeLikesCount}
                                 changeShareStoryText={props.changeShareStoryText}/>
                        <Footer/>
                    </>}
            </div>
        </BrowserRouter>
    );
}

export default App;
