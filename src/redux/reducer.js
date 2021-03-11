
const initialState = {
    photos: [],
    searchResults: {
        results: []
    },
    topics: [],
}

export const Action = {
    Types: {
        GET_PHOTOS: "GET_PHOTOS",
        SET_PHOTOS: "SET_PHOTOS",
        SEARCH_PHOTOS: "SEARCH_PHOTOS",
        SET_SEARCH_RESULT: "SET_SEARCH_RESULT",
        GET_TOPICS: "GET_TOPICS",
        SET_TOPICS: "SET_TOPICS",
        GET_TOPIC_BY_SLUG: "GET_TOPIC_BY_SLUG",
        SET_TOPIC_BY_SLUG: "SET_TOPIC_BY_SLUG",

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
        }),
        getTopics: (data) => ({
            type: Action.Types.GET_TOPICS,
            data
        }),
        setTopics: (data) => ({
            type: Action.Types.SET_TOPICS,
            data
        }),
        getTopicBySlug: (data) => ({
            type: Action.Types.GET_TOPIC_BY_SLUG,
            data,
        }),
        setTopicBySlug: (data) => ({
            type: Action.Types.SET_TOPIC_BY_SLUG,
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
        case Action.Types.SET_TOPICS: {
            return {
                ...state,
                topics: action.data
            }
        }
        case Action.Types.SET_TOPIC_BY_SLUG: {
            return {
                ...state,
                ...action.data,
            }
        }
    }
}

export default reducer;