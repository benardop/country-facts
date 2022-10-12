import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './countries/countries';
import detailsReducer from './detailsReducer/detailsReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  details: detailsReducer,

});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['getCountries//fulfilled', 'getDetials//fulfilled'],
    },
  }).concat(logger),
});

export default store;
