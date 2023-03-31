import { createAction } from '@reduxjs/toolkit';

export const changeViewAction = createAction<{value: string}>('changeView');