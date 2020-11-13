import {ACTIONS} from '@/store/actionsType.js'
const swiperList = [{
    id:1,
    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604765080706&di=672462f0d791a79b644f62063dfa65cd&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h425%2F20171202%2F7828-fypikwt3113517.jpg'
}]
export const swiper = (state = swiperList,action ) => {
    switch (action.type){
        case ACTIONS.GETSWIPER:
        return state
        case ACTIONS.SETSWIPER:
        return  action.data
        break
        default:
        return state
    }
}