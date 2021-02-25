
const initialState = {
    photos: [],
    searchResults: {
        results: []
    },
}

export const Action = {
    Types: {
        GET_PHOTOS: "GET_PHOTOS",
        SET_PHOTOS: "SET_PHOTOS",
        SEARCH_PHOTOS: "SEARCH_PHOTOS",
        SET_SEARCH_RESULT: "SET_SEARCH_RESULT",
    },

    Creators: {
        getPhotos: (data) => ({
            type: Action.Types.GET_PHOTOS,
            data
        }),
        setPhotos: (data) => ({
            type: Action.Types.SET_PHOTOS,
            data
        }),
        searchPhotos: (data) => ({
            type: Action.Types.SEARCH_PHOTOS,
            data
        }),
        setSearchResult: (data) => ({
            type: Action.Types.SET_SEARCH_RESULT,
            data
        })
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                photos: action.data
            }
        }
        case Action.Types.SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResults: action.data
            }
        }
    }
}

export default reducer;