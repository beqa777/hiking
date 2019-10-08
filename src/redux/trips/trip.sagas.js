import { takeLatest, call, all, put } from 'redux-saga/effects';
import TripTypes from './trip.types';
import { getTripsSuccess, getTripsFailure } from './trip.actions';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.util';

export function* fetchTrips() { 
    try {
        const collection = firestore.collection('trips');
        const ref = yield collection.get();
        const data = yield convertCollectionsToMap(ref);
        yield put(getTripsSuccess(data));
    } catch (error) {
        debugger;
        yield put(getTripsFailure(error));
    }
}

export function* getTripsStart() {
    yield takeLatest(
        TripTypes.GET_TRIP_START,
        fetchTrips
    );
}

export default function* trips() {
    yield all([
        call(getTripsStart)
    ])
}