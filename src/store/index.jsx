import { createStore,combineReducers,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {header} from './header.js'
import {swiper} from './swiper.js'
import {facation} from './facation.js'
import {showMap} from './showmap.js'
import {defsaga} from './sagas.js'
const sagaMiddleware  = createSagaMiddleware()
export const store = createStore(
    combineReducers({
        header,
        swiper,
        facation,
        showMap
    }),
    {},
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(defsaga)