export function setExchange(exchange) {
  return {
    type: 'SET_EXCHANGE',
    payload: exchange
  }
}
export function setExchangeParams(exchangeParams) {
  return {
    type: 'SET_EXCHANGE_PARAMS',
    payload: exchangeParams
  }
}
