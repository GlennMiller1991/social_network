import React from 'react'
import {tagType} from "../../../../../redux/store";

type TagPropsType = tagType

export const Tag: React.FC<TagPropsType> = (props) => {

    //styles
    const tagStyle = {
        fontSize: props.priority
    }

    //return
    return (
        <span style={tagStyle}>{props.name} </span>
    );
}