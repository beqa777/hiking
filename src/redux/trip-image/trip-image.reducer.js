import tripImageTypes from './trip-image.types';

const INITIAL_STATE = {
    isLoading: true,
    error: false,
    images: []
};

const tripImageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tripImageTypes.GET_TRIP_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload,
                isLoading: false
            }

        case tripImageTypes.GET_TRIP_IMAGES_FAILURE:
            return {
                ...state,
                images: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default tripImageReducer;