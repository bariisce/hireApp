// store.js (yeni dosya)
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// Redux store'u oluşturma
const store = configureStore({
  reducer,
});

export default store;
