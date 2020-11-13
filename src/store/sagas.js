import { all } from 'redux-saga/effects'
import {getSwiper} from './sagas/swiperSaga.js'
import {facationSaga} from './sagas/facationSaga.js'
export function * defsaga(){
    yield all([getSwiper(),facationSaga()])
}