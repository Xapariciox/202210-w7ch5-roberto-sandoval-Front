import { createAction } from '@reduxjs/toolkit';
import { robot } from '../types/robot';

import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<robot>>(actionTypes.load);

export const addActionCreator = createAction<robot>(actionTypes.add);

export const updateActionCreator = createAction<robot>(actionTypes.update);

export const deleteActionCreator = createAction<robot['id']>(
    actionTypes.delete
);
