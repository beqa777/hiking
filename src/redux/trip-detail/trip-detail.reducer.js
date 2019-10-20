import tripDetailTypes from './trip-detail.type';

const INITIAL_STATE = {
    info: {},
    error: null,
    isLoading: true
}

const tripDetailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tripDetailTypes.GET_TRIP_DETAIL_FAILURE:
            return {
                ...state,
                info: null,
                error: action.payload,
                isLoading: false
            };

        case tripDetailTypes.GET_TRIP_DETAIL_SUCCESS:
            return {
                ...state,
                info: action.payload,
                error: null,
                isLoading: false
            };

        case tripDetailTypes.TRIP_DETAIL_CLEAN:
            return {
                ...state,
                info: {},
                error: null,
                isLoading: true
            }

        default:
            return state;
    }
}

export default tripDetailReducer;

