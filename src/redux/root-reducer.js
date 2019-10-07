import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import tripImageReducer from './trip-image/trip-image.reducer';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['images']
};

const rootReducer = combineReducers({
  images: tripImageReducer
});

export default persistReducer(persistConfig, rootReducer);
