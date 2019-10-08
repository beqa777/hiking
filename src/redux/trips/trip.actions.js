import TripTypes from './trip.types';

export const getTripsStart = () => ({
    type: TripTypes.GET_TRIP_START,
});

export const getTripsSuccess = (trips) => ({
    type: TripTypes.GET_TRIP_SUCCESS,
    payload: trips
});

export const getTripsFailure = (error) => ({
    type: TripTypes.GET_TRIP_FAILURE,
    payload: error
});