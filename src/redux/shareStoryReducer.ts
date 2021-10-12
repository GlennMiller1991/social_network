import {actionsType} from "./redux_store";

//constants
const CHANGE_SHARE_STORY_TEXT = 'CHANGE-SHARE-STORY-TEXT'

//actions creators
export const changeShareStoryTextActionCreator = (text: string) => {
    return {
        type: CHANGE_SHARE_STORY_TEXT,
        shareStoryText: text
    } as const
}

//actions types
export type changeShareStoryTextActionType = ReturnType<typeof changeShareStoryTextActionCreator>

//data
const initialState = {
    storyText: ''
}

//types
export type shareStoryPageType = {
    storyText: string
}

//reducer
export const shareStoryReducer = (state: shareStoryPageType = initialState, action: actionsType) => {
    switch(action.type) {
        case CHANGE_SHARE_STORY_TEXT:
            return {...state, storyText: action.shareStoryText}
        default:
            return state
    }
}