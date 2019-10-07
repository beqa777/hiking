import { createSelector } from 'reselect';

const selectImages = state => state.images;

export const selectTripImages = createSelector(
    [selectImages],
    images => images.tripImages
);