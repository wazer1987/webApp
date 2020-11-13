import {ACTIONS} from '@/store/actionsType.js'
const title = '菜谱大全'
export const header = (state = title,action ) => {
    switch (action.type){
        case ACTIONS.SETHEADER:
            return state = action.data
            break
            default:
            return state
    }
    
}