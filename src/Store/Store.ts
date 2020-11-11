import { createStore } from 'redux'
import { exchangeReducer, initialState } from './ExchangeReducer'

export const store = createStore(exchangeReducer, initialState)
