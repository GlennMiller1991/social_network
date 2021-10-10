import React from 'react'
import {tagType} from "../../../../../redux/sidebarReducer";

type TagPropsType = tagType
const TagSecret: React.FC<TagPropsType> = (props) => {

    //styles
    const tagStyle = {
        fontSize: props.priority
    }

    //return
    return (
        <span style={tagStyle}>{props.name} </span>
    );
}
export const Tag = React.memo(TagSecret)