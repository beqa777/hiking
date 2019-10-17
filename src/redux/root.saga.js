import { all, call } from 'redux-saga/effects';
import tripImages from './trip-image/trip-image.sagas';
import trips from './trips/trip.sagas';
import tripDetails from './trip-detail/trip-detail.sagas';

export default function* () {
    yield all([
        call(tripImages),
        call(trips),
        call(tripDetails)
    ])
}