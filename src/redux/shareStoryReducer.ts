import {actionsType, shareStoryPageType} from "./store";

const CHANGE_SHARE_STORY_TEXT = 'CHANGE-SHARE-STORY-TEXT'
export const changeShareStoryTextActionCreator = (text: string): actionsType => {
    return {type: CHANGE_SHARE_STORY_TEXT, shareStoryText: text}
}

const initialState = {
    storyText: ''
}

export const shareStoryReducer = (state: shareStoryPageType = initialState, action: actionsType) => {
    switch(action.type) {
        case CHANGE_SHARE_STORY_TEXT:
            state.storyText = action.shareStoryText
            return state
        default:
            return state
    }
}