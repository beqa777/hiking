import { createSelector } from 'reselect';

const selectInfo = state => state.tripInfo;

export const selectTrips = createSelector(
    [selectInfo],
    info => info.trips
);

export const selectLoading = createSelector(
    [selectInfo],
    info => info.isLoading
);

export const selectError = createSelector(
    [selectInfo],
    info => info.error
);