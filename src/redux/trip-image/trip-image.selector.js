import { createSelector } from 'reselect';

const selectImages = state => state.tripImages;

export const selectTripImages = createSelector(
    [selectImages],
    info => info.images
);

export const selectIsLoading = createSelector(
    [selectImages],
    info => info.isLoading
);

export const selectError = createSelector(
    [selectImages],
    info => info.error
);
