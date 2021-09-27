import styles from "../Sidebar.module.css";
import React from "react";
import {tagType} from "../../../../redux/state";
import {Tag} from "./Tag/Tag";

type TagsPropsType = {
    tags: Array<tagType>
}

export const Tags: React.FC<TagsPropsType> = (props) => {

    return (
        <div>
            {props.tags.map((tag) => <Tag name={tag.name} priority={tag.priority}/>)}
        </div>
    );
}