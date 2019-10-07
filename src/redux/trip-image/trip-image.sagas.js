import { takeLatest, call, all, put } from 'redux-saga/effects';
import tripImageTypes from './trip-image.types';
import { getTripImagesFailure, getTripImagesSuccess } from './trip-image.actions';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.util'

export function* fetchTripImages() {
    try {
        const tripImageRef = firestore.collection('trip-images');
        const snapShot = yield tripImageRef.get();
        const data = yield convertCollectionsToMap(snapShot);
        yield put(getTripImagesSuccess(data));
    } catch (error) {
        yield put(getTripImagesFailure(error));
    }
}

export function* getTripImagesStart() {
    yield takeLatest(
        tripImageTypes.GET_TRIP_IMAGES_START,
        fetchTripImages
    );
}

export default function* tripImages() {
    yield all([
        call(getTripImagesStart)
    ]);
}