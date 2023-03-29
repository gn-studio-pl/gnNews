import { configureStore } from '@reduxjs/toolkit';
import newsFormatSlice from './newsFormat';

export const store = configureStore({ reducer: newsFormatSlice.reducer });
