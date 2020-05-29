import { combineReducers } from 'redux';

import { properties } from './properties';

export const rootReducer = combineReducers({
    properties,
});

export type RootState = ReturnType<typeof rootReducer>;
