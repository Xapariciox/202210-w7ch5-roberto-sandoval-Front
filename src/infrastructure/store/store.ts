import { configureStore } from '@reduxjs/toolkit';
import { reducerRobots } from '../../features/reducer.robots/reducer.Robots';

export const appStore = configureStore({
    reducer: {
        robots: reducerRobots,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
