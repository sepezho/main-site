export const initialState = {
  exchange: 'Loading...',
  exchangeParams: {
    val1: 'USD',
    val2: 'RUB',
    amount: 1
  },
  historyExchange: {},
}

export function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_EXCHANGE':
      return { ...state, exchange: action.payload }
    case 'SET_EXCHANGE_PARAMS':
      return { ...state, exchangeParams: action.payload }
    case 'SET_HISTORY_EXCHANGE':
      return { ...state, historyExchange: action.payload }
          
    default:
      return state
  }
}