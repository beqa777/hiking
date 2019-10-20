import { takeLatest, call, all, put } from 'redux-saga/effects';
import tripDetailTypes from './trip-detail.type';
import { getTripDetailSuccess, getTripDetailFailure } from './trip-details.actions';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.util'

function* fetchTripDetails({payload}) {
    try {
        const ref = firestore.collection('trips');
        const doc = yield ref.where('unic_slug', '==', payload);
        const res = yield doc.get();
        const data = yield convertCollectionsToMap(res)[0];
        yield put(getTripDetailSuccess(data));
    } catch (error) {
        yield put(getTripDetailFailure(error));
    }
}

export function* getTripDetailStart() {
    yield takeLatest(
        tripDetailTypes.GET_TRIP_DETAIL_START,
        fetchTripDetails
    );
}

export default function* tripDetails() {
    yield all([
        call(getTripDetailStart)
    ]);
}

