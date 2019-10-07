import tripImageTypes from './trip-image.types';

const INITIAL_STATE = {
    tripImages: [],
    error: null
};

const tripImageReducer = (state = INITIAL_STATE, action) => {


    switch (action.type) {
        case tripImageTypes.GET_TRIP_IMAGES_SUCCESS:
            return {
                ...state,
                tripImages: action.payload
            }

        // case tripImageTypes.GET_TRIP_IMAGES_FAILURE:
        //     return {
        //         ...state,
        //         tripImages: [],
        //         error: action.payload
        //     }

        default:
            return state;
    }
}

export default tripImageReducer;