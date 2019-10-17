import tripDetailTypes from './trip-detail.type';

export const getTripDetailStart = (slug) => ({
    type: tripDetailTypes.GET_TRIP_DETAIL_START,
    payload: slug
});

export const getTripDetailSuccess = (tripDetail) => ({
    type: tripDetailTypes.GET_TRIP_DETAIL_SUCCESS,
    payload: tripDetail
});

export const getTripDetailFailure = (error) => ({
    type: tripDetailTypes.GET_TRIP_DETAIL_FAILURE,
    payload: error
});

export const getTripDetailClean = () => ({
    type: tripDetailTypes.TRIP_DETAIL_CLEAN,
});
