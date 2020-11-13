import {tekeEvery,call,put, takeEvery} from 'redux-saga/effects'
import {ACTIONS} from '@/store/actionsType.js'
import {getFacation} from '@/api/facation.js'
export function * facationSaga(){
    yield takeEvery(ACTIONS.GETFACATION,function*(){
        const {data:{data}} = yield call (getFacation)
        // console.log(category)
        yield put({
            type:ACTIONS.SETFACATION,
            data
        })
    })
}