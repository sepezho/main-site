import { createStore } from 'redux'
import { imgReducer, initialState } from './ImgReducer'

export const store = createStore(imgReducer, initialState)
