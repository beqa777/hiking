import { all, call } from 'redux-saga/effects';
import tripImages from './trip-image/trip-image.sagas';

export default function* () {
    yield all([
        call(tripImages)
    ])
}