import { createStore } from 'redux';
import { reducer, initialState } from './Reducer';

export const store = createStore(reducer, initialState);
