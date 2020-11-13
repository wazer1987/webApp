import {ACTIONS} from '@/store/actionsType.js'
import { CANCEL } from 'redux-saga'
export const facation = (state = {},action) => {
    switch(action.type){
        
        case ACTIONS.GETFACATION:
        return state
        break
        case ACTIONS.SETFACATION:
        return action.data
        default:
        return state
    }
}