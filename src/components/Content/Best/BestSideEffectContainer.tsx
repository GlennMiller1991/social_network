import React from 'react'
import {Best} from "./Best";

export class BestSideEffectContainer extends React.Component {
    componentDidMount() {
        document.title = 'Best Page'
    }
    render() {
        return (
            <Best/>
        )
    }
}