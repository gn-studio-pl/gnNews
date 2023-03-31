import { createAction } from '@reduxjs/toolkit';
import { INews } from '../../models/INews';

export const updateNewsAction = createAction<{value: INews[]}>('updateNews');

