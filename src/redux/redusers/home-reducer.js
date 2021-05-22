const SET_VIDEOS = 'SET_VIDEOS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    videos: [1, 2, 3],
    isFetching: false
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return {
                ...state,
                videos: [action.videos]
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const setVideos = (videos) => {
    return {
        type: SET_VIDEOS,
        videos
    }
}

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export default homeReducer