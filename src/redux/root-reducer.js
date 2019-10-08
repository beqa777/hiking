import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import tripImageReducer from './trip-image/trip-image.reducer';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'persistStore',
  storage,
  whitelist: ['images']
};

const rootReducer = combineReducers({
  tripImages: tripImageReducer
});

export default persistReducer(persistConfig, rootReducer);
