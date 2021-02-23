
const initialState = {
    photos: [],
}

export const Action = {
    Types: {
        GET_PHOTOS: "GET_PHOTOS",
        SET_PHOTOS: "SET_PHOTOS",
    },

    Creators: {
        getPhotos: (data) => ({
            type: Action.Types.GET_PHOTOS,
            data
        }),
        setPhotos: (data) => ({
            type: Action.Types.SET_PHOTOS,
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
    }
}

export default reducer;