import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer } from './Reducer';

const middleware = [thunk]
middleware.push(createLogger())

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

