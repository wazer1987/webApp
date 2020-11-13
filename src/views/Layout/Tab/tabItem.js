// {
//    "icon":[
//       {"title":"菜谱大全","default":"../../../asset/meishi.png","active":"../../../asset/meishi_1.png","content":"菜谱大全页面"},
//       {"title":"分类","default":"../../../asset/category.png","active":"../../../asset/class.png","content":"分类页面"},
//       {"title":"更多","default":"../../../asset/gengduo.png","active":"../../../asset/gengduo_1.png","content":"更多页面"}
//    ]
// }
import meishi from '../../../asset/meishi.png'
import meishi_1 from '../../../asset/meishi_1.png'
import category from '../../../asset/category.png'
import class1 from '../../../asset/class.png'
import map from '../../../asset/map.png'
import map1 from '../../../asset/map1.png'
import gengduo from '../../../asset/gengduo.png'
import gengduo_1 from '../../../asset/gengduo_1.png'
import Home from '../../pages/home/Home.jsx'
import Fication from '@/views/pages/classPage/fication'
import FoodMap from '@/views/pages/map/map'
import More from '@/views/pages/more/More'
import {store} from '@/store/index'
export const icon = () => {
   return [
      {title:"菜谱大全",default:meishi,active:meishi_1,content:"菜谱大全页面",renderContent: () => {
         return (<Home/>)
      }},
      {title:"分类",default:category,active:class1,content:"分类页面",renderContent: () => {
         return (<Fication/>)
      }},
      {title:"美食地图",default:map,active:map1,content:"美食地图",renderContent: () => {
         return (<FoodMap/>)
      }},
      {title:"更多",default:gengduo,active:gengduo_1,content:"更多",renderContent: () => {
         return (<More/>)
      }},
   ]
}