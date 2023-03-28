import { configureStore } from '@reduxjs/toolkit';
import { IAction } from '../models/IAction';
import { IStoreState } from '../models/IStoreState';
import { changeViewReducer } from './reducers/changeViewReducer';



export const store = configureStore({ reducer: changeViewReducer });
