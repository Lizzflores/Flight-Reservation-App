import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './hooks';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
