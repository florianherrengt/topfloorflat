import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer, RootState } from '../redux';

export const configureStore = () =>
    createStore(rootReducer, {}, applyMiddleware(thunk));
