import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './redux/slices';

export default () => configureStore({
  reducer: reducers,
});
