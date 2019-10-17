import { combineReducers } from 'redux';
import tripImageReducer from './trip-image/trip-image.reducer';
import tripReducer from './trips/trip-reducer';
import tripDetailReducer from './trip-detail/trip-detail.reducer';

const rootReducer = combineReducers({
  tripImages: tripImageReducer,
  tripInfo: tripReducer,
  tripDetail: tripDetailReducer
});

export default rootReducer;
