import {ACTIONS} from '@/store/actionsType'
export const showMap = (state = true,action) => {
    switch(action.type){
        case ACTIONS.SHOWMAP:
        return action.data
        break
        default:
        return state
    }
}