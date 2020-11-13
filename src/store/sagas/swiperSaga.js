import {ACTIONS} from '@/store/actionsType.js'
import {takeEvery,call,put} from 'redux-saga/effects'
import {getSwiper as swiper} from '@/api/swiper.js'
// import axios from 'axios'
export function * getSwiper(){
    yield takeEvery(ACTIONS.GETSWIPER,function*(){
            const {data}  = yield call(swiper)
            yield put({
                type:ACTIONS.SETSWIPER,
                data:data.swiper
            })
    })
}