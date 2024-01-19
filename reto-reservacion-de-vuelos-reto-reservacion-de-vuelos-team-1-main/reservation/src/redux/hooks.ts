import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './slices/booking.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;