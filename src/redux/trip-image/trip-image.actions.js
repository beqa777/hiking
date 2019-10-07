import tripImageTypes from './trip-image.types';

export const getTripImagesStart = () => ({
    type: tripImageTypes.GET_TRIP_IMAGES_START,
});

export const getTripImagesSuccess = (payload) => ({
    type: tripImageTypes.GET_TRIP_IMAGES_SUCCESS,
    payload
});

export const getTripImagesFailure = (error) => ({
    type: tripImageTypes.GET_TRIP_IMAGES_FAILURE,
    payload: error
});
