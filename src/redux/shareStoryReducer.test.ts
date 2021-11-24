import {changeShareStoryTextActionCreator, shareStoryPageType, shareStoryReducer} from './shareStoryReducer'

let initialState: shareStoryPageType
beforeEach(() => {
    initialState = {
        storyText: '',
    }
})

test('change text inside story field', () => {
    let newState = shareStoryReducer(initialState, changeShareStoryTextActionCreator('s'))
    expect(newState.storyText).toBe('s')
})
