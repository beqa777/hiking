import { combineReducers } from 'redux';
import tripImageReducer from './trip-image/trip-image.reducer';
import tripReducer from './trips/trip-reducer';

const rootReducer = combineReducers({
  tripImages: tripImageReducer,
  tripInfo: tripReducer
});

export default rootReducer;
