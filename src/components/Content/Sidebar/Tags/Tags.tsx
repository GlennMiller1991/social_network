import React from "react";
import {Tag} from "./Tag/Tag";
import {tagType} from "../../../../redux/sidebarReducer";

type TagsPropsType = {
    tags: Array<tagType>
}

 const TagsSecret: React.FC<TagsPropsType> = (props) => {

    return (
        <div>
            {props.tags.map((tag, id) => <Tag key={id} name={tag.name} priority={tag.priority}/>)}
        </div>
    );
}
export const Tags = React.memo(TagsSecret)