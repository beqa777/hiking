import { createSelector } from 'reselect';

const selectTripDetail = state => state.tripDetail;

export const selectInfo = createSelector(
    [selectTripDetail],
    detail => detail.info
);

export const selectIsLoading = createSelector(
    [selectTripDetail],
    detail => detail.isLoading
);

export const selectInfoError = createSelector(
    [selectTripDetail],
    detail => detail.error
);
