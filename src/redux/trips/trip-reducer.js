import TripTypes from './trip.types';
const INITIAL_STATE = {
    isLoading: true,
    error: false,
    trips: []
}

const tripReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TripTypes.GET_TRIP_SUCCESS:
            return {
                ...state,
                trips: action.payload,
                isLoading: false,
                error: false
            }

        case TripTypes.GET_TRIP_FAILURE:
            return {
                ...state,
                trips: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default tripReducer;